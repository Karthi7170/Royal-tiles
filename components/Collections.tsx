"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { collections } from "@/lib/data";
import { makeWhatsapp } from "@/lib/site";

const filters = ["All", "Floor", "Wall", "Spaces"];

export default function Collections() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? collections : collections.filter((item) => item.tag === filter);

  const activeTabId = "collection-tab-" + filter.toLowerCase();

  return (
    <section className="section collectionsSection" id="collections">
      <div className="sectionHeading splitHeading">
        <div>
          <div className="eyebrow">SHOP BY SPACE</div>
          <h2>Start with where the tile will live.</h2>
        </div>
        <p>
          A simpler way to browse: choose the room or surface first, then compare
          the looks, sizes and finishes that make sense for it.
        </p>
      </div>

      <div className="filterRow" role="tablist" aria-label="Filter tile collections">
        {filters.map((item) => (
          <button
            key={item}
            id={"collection-tab-" + item.toLowerCase()}
            type="button"
            role="tab"
            aria-selected={filter === item}
            aria-controls="collection-panel"
            className={filter === item ? "filter active" : "filter"}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className="collectionGrid"
        id="collection-panel"
        role="tabpanel"
        aria-labelledby={activeTabId}
        tabIndex={0}
      >
        {filtered.map((item) => (
          <article className="collectionCard" key={item.title}>
            <Image
              src={item.image}
              alt={item.title + " tile inspiration"}
              fill
              sizes="(max-width: 820px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
            <div className="collectionShade" />
            <div className="collectionContent">
              <span>{item.subtitle}</span>
              <h3>{item.title}</h3>
              <a
                href={makeWhatsapp("Hi New Royal Tiles, show me options for " + item.title + ".")}
                target="_blank"
                rel="noreferrer"
              >
                Ask for options <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
