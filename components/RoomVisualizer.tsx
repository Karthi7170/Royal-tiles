"use client";

import {
  Camera,
  ImagePlus,
  MessageCircle,
  RotateCcw,
  Sparkles
} from "lucide-react";
import { ChangeEvent, CSSProperties, useState } from "react";
import { makeWhatsapp } from "@/lib/site";

const sampleRoom =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=88";

const tileLooks = [
  {
    name: "Calacatta Pearl",
    family: "Marble",
    color: "#e8e1d7",
    pattern:
      "linear-gradient(115deg, transparent 0 24%, rgba(120,110,100,.18) 25%, transparent 27% 58%, rgba(137,125,113,.13) 60%, transparent 63%), linear-gradient(rgba(255,255,255,.26) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.26) 1px, transparent 1px)"
  },
  {
    name: "Travertine Sand",
    family: "Stone",
    color: "#c9ad87",
    pattern:
      "repeating-linear-gradient(6deg, rgba(90,62,40,.12) 0 2px, transparent 2px 15px), linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)"
  },
  {
    name: "Ivory Satin",
    family: "Minimal",
    color: "#d9d0bd",
    pattern:
      "radial-gradient(circle at 28% 28%, rgba(255,255,255,.36), transparent 24%), linear-gradient(rgba(255,255,255,.20) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.20) 1px, transparent 1px)"
  },
  {
    name: "Graphite Slate",
    family: "Stone",
    color: "#595750",
    pattern:
      "repeating-linear-gradient(135deg, rgba(255,255,255,.05) 0 2px, transparent 2px 17px), linear-gradient(rgba(255,255,255,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.13) 1px, transparent 1px)"
  },
  {
    name: "Warm Oak",
    family: "Wood",
    color: "#9f7756",
    pattern:
      "repeating-linear-gradient(3deg, rgba(68,35,18,.16) 0 2px, transparent 2px 12px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)"
  }
];

export default function RoomVisualizer() {
  const [roomImage, setRoomImage] = useState(sampleRoom);
  const [usingOwnPhoto, setUsingOwnPhoto] = useState(false);
  const [surface, setSurface] = useState<"floor" | "wall">("floor");
  const [lookIndex, setLookIndex] = useState(0);
  const [opacity, setOpacity] = useState(54);
  const [scale, setScale] = useState(92);

  const selectedLook = tileLooks[lookIndex];

  function handlePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setRoomImage(reader.result);
        setUsingOwnPhoto(true);
      }
    };
    reader.readAsDataURL(file);
  }

  function resetSample() {
    setRoomImage(sampleRoom);
    setUsingOwnPhoto(false);
    setSurface("floor");
    setLookIndex(0);
    setOpacity(54);
    setScale(92);
  }

  const overlayStyle: CSSProperties = {
    backgroundColor: selectedLook.color,
    backgroundImage: selectedLook.pattern,
    backgroundSize: surface === "floor" ? `${scale}px ${scale}px` : `${Math.round(scale * 0.85)}px ${Math.round(scale * 0.85)}px`,
    opacity: opacity / 100
  };

  return (
    <section className="visualizerSection" id="visualizer">
      <div className="visualizerIntro">
        <div className="eyebrow light">SMART ROOM VISUALIZER · BETA</div>
        <h2>See a tile direction in your own space before you visit.</h2>
        <p>
          Take a room photo or upload one from your phone, choose a surface and try
          different tile looks. This browser-based preview runs on your device and is
          designed to help you shortlist faster.
        </p>

        <div className="visualizerSteps">
          <div><span>01</span><strong>Upload or take a room photo</strong></div>
          <div><span>02</span><strong>Choose floor or wall</strong></div>
          <div><span>03</span><strong>Try a finish and share it</strong></div>
        </div>

        <div className="visualizerNote">
          <Sparkles size={18} />
          <span>
            Concept preview only. Actual tile shade, joint width, scale, gloss and
            texture can vary. Confirm the final surface at the showroom.
          </span>
        </div>
      </div>

      <div className="visualizerStudio">
        <div className="visualizerCanvas">
          <img src={roomImage} alt="Room preview for tile visualizer" />
          <div
            className={surface === "floor" ? "visualizerSurface floor" : "visualizerSurface wall"}
            style={overlayStyle}
            aria-hidden="true"
          />
          <div className="visualizerBadge">
            {usingOwnPhoto ? "Your room" : "Sample room"} · {selectedLook.name}
          </div>
        </div>

        <div className="visualizerControls">
          <div className="visualizerControlBlock">
            <span className="controlLabel">Your space</span>
            <div className="uploadRow">
              <label className="visualizerUpload">
                <Camera size={17} />
                Take / upload photo
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhoto}
                />
              </label>
              <button className="visualizerReset" type="button" onClick={resetSample}>
                <RotateCcw size={16} /> Reset
              </button>
            </div>
          </div>

          <div className="visualizerControlBlock">
            <span className="controlLabel">Apply to</span>
            <div className="segmentedControl">
              <button
                type="button"
                className={surface === "floor" ? "active" : ""}
                onClick={() => setSurface("floor")}
              >
                Floor
              </button>
              <button
                type="button"
                className={surface === "wall" ? "active" : ""}
                onClick={() => setSurface("wall")}
              >
                Wall
              </button>
            </div>
          </div>

          <div className="visualizerControlBlock">
            <span className="controlLabel">Tile direction</span>
            <div className="tileLookGrid">
              {tileLooks.map((look, index) => (
                <button
                  key={look.name}
                  type="button"
                  className={index === lookIndex ? "tileLook active" : "tileLook"}
                  onClick={() => setLookIndex(index)}
                  aria-label={"Preview " + look.name}
                >
                  <span
                    className="tileLookSwatch"
                    style={{
                      backgroundColor: look.color,
                      backgroundImage: look.pattern
                    }}
                  />
                  <span>
                    <strong>{look.name}</strong>
                    <small>{look.family}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="visualizerRangeGrid">
            <label>
              <span>Preview strength <strong>{opacity}%</strong></span>
              <input
                type="range"
                min="28"
                max="78"
                value={opacity}
                onChange={(event) => setOpacity(Number(event.target.value))}
              />
            </label>

            <label>
              <span>Tile scale <strong>{scale}</strong></span>
              <input
                type="range"
                min="56"
                max="150"
                value={scale}
                onChange={(event) => setScale(Number(event.target.value))}
              />
            </label>
          </div>

          <div className="visualizerActions">
            <a
              className="primaryButton"
              href={makeWhatsapp(
                "Hi New Royal Tiles, I used your room visualizer. I like the " +
                  selectedLook.name +
                  " " +
                  selectedLook.family +
                  " direction for my " +
                  surface +
                  ". Please show me similar options."
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> Show me similar tiles
            </a>
            <label className="outlineButton visualizerAltUpload">
              <ImagePlus size={17} /> Change room photo
              <input type="file" accept="image/*" onChange={handlePhoto} />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
