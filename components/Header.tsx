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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        <span>4 showrooms · Valayambattu · Vellore · Gudiyatham · Pernambut</span>
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
          <a href="#visualizer">Visualizer</a>
          <a href="#inspiration">Inspiration</a>
          <a href="#calculator">Calculator</a>
          <a href="#branches">Branches</a>
        </nav>

        <div className="headerActions">
          <a className="textAction" href="#branches">
            <MapPin size={17} /> 4 showrooms
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
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobileMenu">
            <a href="#collections" onClick={closeMenu}>Collections</a>
            <a href="#visualizer" onClick={closeMenu}>Room visualizer</a>
            <a href="#inspiration" onClick={closeMenu}>Inspiration</a>
            <a href="#calculator" onClick={closeMenu}>Tile calculator</a>
            <a href="#branches" onClick={closeMenu}>Our 4 branches</a>
            <a href={directionsHref} target="_blank" rel="noreferrer">Main showroom directions</a>
            <a href={phoneHref}>Call showroom</a>
          </div>
        )}
      </header>
    </>
  );
}
