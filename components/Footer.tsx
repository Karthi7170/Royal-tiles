import { MessageCircle } from "lucide-react";
import {
  directionsHref,
  makeWhatsapp,
  phoneHref
} from "@/lib/site";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerBrand">
          <a className="brand footerLogo" href="#top">
            <span className="brandMark">NR</span>
            <span className="brandText">
              <strong>NEW ROYAL</strong>
              <small>TILES</small>
            </span>
          </a>
          <p>Premium surfaces. Practical guidance. Local service.</p>
        </div>

        <div className="footerLinks">
          <div>
            <span>Explore</span>
            <a href="#collections">Collections</a>
            <a href="#inspiration">Inspiration</a>
            <a href="#calculator">Tile calculator</a>
          </div>

          <div>
            <span>Visit</span>
            <a href={directionsHref} target="_blank" rel="noreferrer">Google Maps</a>
            <a href={phoneHref}>Call showroom</a>
            <a
              href={makeWhatsapp("Hi New Royal Tiles")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div>
            <span>Location</span>
            <p>M C Road, Valayampattu<br />Tamil Nadu 635751</p>
            <p>Opening time: 9:30 AM</p>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {new Date().getFullYear()} New Royal Tiles. All rights reserved.</span>
          <span>Designed for mobile-first local discovery.</span>
        </div>
      </footer>

      <a
        className="floatingWhatsapp"
        href={makeWhatsapp("Hi New Royal Tiles, I would like help choosing tiles.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with New Royal Tiles on WhatsApp"
      >
        <MessageCircle />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
