"use client";

import { MapPin, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import {
  directionsHref,
  logoUrl,
  makeWhatsapp,
  phoneDisplay,
  phoneHref
} from "@/lib/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>Premium tile selection, now easier online</span>
        <a href={phoneHref}>Call {phoneDisplay}</a>
      </div>

      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="New Royal Tiles home">
          <img
            className="brandLogoImage"
            src={logoUrl}
            alt="Royal Tiles logo"
          />
          <span className="brandText">
            <strong>NEW ROYAL</strong>
            <small>TILES</small>
          </span>
        </a>

        <nav className="desktopNav" aria-label="Main navigation">
          <a href="#collections">Collections</a>
          <a href="#inspiration">Inspiration</a>
          <a href="#calculator">Tile calculator</a>
          <a href="#showroom">Showroom</a>
        </nav>

        <div className="headerActions">
          <a className="textAction" href={directionsHref} target="_blank" rel="noreferrer">
            <MapPin size={17} /> Directions
          </a>
          <a
            className="primaryButton small"
            href={makeWhatsapp("Hi New Royal Tiles, I would like help choosing tiles.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
          <button
            className="menuButton"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobileMenu">
            <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
            <a href="#inspiration" onClick={() => setMenuOpen(false)}>Inspiration</a>
            <a href="#calculator" onClick={() => setMenuOpen(false)}>Tile calculator</a>
            <a href="#showroom" onClick={() => setMenuOpen(false)}>Showroom</a>
            <a href={phoneHref}>Call showroom</a>
          </div>
        )}
      </header>
    </>
  );
}
