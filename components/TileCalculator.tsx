"use client";

import { ArrowRight, Calculator } from "lucide-react";
import { useMemo, useState } from "react";
import { makeWhatsapp } from "@/lib/site";

export default function TileCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [wastage, setWastage] = useState("10");

  const area = useMemo(() => {
    const l = Number(length);
    const w = Number(width);
    const extra = Number(wastage);
    if (!l || !w || l <= 0 || w <= 0) return 0;
    return l * w * (1 + extra / 100);
  }, [length, width, wastage]);

  const message = area
    ? "Hi New Royal Tiles, my estimated tile area is " +
      area.toFixed(1) +
      " sq ft including " +
      wastage +
      "% wastage. Please help me with suitable options."
    : "Hi New Royal Tiles, I need help estimating tiles for my space.";

  return (
    <section className="calculatorSection" id="calculator">
      <div className="calculatorIntro">
        <div className="eyebrow light">QUICK PLANNING TOOL</div>
        <h2>Estimate your tile area before you visit.</h2>
        <p>
          Enter the room length and width in feet. We add your chosen wastage
          allowance so you have a practical starting estimate for discussion.
        </p>
        <div className="calculatorNote">
          <Calculator size={22} />
          <span>
            This is an area estimate, not a final quantity. Tile size, pattern,
            cuts and site conditions can change the order quantity.
          </span>
        </div>
      </div>

      <div className="calculatorCard">
        <div className="inputGrid">
          <label>
            <span>Length (ft)</span>
            <input
              type="number"
              min="0.1"
              max="100000"
              step="0.1"
              inputMode="decimal"
              value={length}
              onInput={(event) => setLength(event.currentTarget.value)}
              placeholder="e.g. 15"
            />
          </label>
          <label>
            <span>Width (ft)</span>
            <input
              type="number"
              min="0.1"
              max="100000"
              step="0.1"
              inputMode="decimal"
              value={width}
              onInput={(event) => setWidth(event.currentTarget.value)}
              placeholder="e.g. 12"
            />
          </label>
        </div>

        <label className="wastageLabel">
          <span>Wastage allowance</span>
          <select value={wastage} onChange={(event) => setWastage(event.target.value)}>
            <option value="5">5%</option>
            <option value="10">10% — common starting point</option>
            <option value="15">15%</option>
          </select>
        </label>

        <div className="areaResult">
          <span>Estimated order area</span>
          <strong>{area ? area.toFixed(1) : "—"} <small>sq ft</small></strong>
        </div>

        <a
          className="primaryButton calculatorButton"
          href={makeWhatsapp(message)}
          target="_blank"
          rel="noreferrer"
        >
          Send estimate on WhatsApp <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
