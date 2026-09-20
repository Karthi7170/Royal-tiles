import { MessageCircle } from "lucide-react";
import { branchDirections, branches } from "@/lib/branches";
import {
  logoUrl,
  makeWhatsapp,
  phoneHref
} from "@/lib/site";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerBrand">
          <a className="footerLogoLockup" href="#top" aria-label="New Royal Tiles home">
            <img
              className="footerLogoImage"
              src={logoUrl}
              alt="Royal Tiles logo"
            />
            <span>
              <strong>NEW ROYAL TILES</strong>
              <small>4 SHOWROOMS · NORTH TAMIL NADU</small>
            </span>
          </a>
          <p>Premium surfaces. Smart tools. Local showroom guidance.</p>
        </div>

        <div className="footerLinks">
          <div>
            <span>Explore</span>
            <a href="#collections">Collections</a>
            <a href="#visualizer">Room visualizer</a>
            <a href="#inspiration">Inspiration</a>
            <a href="#calculator">Tile calculator</a>
          </div>

          <div>
            <span>Plan & contact</span>
            <a href="#branches">Find a branch</a>
            <a href={phoneHref}>Call main showroom</a>
            <a
              href={makeWhatsapp("Hi New Royal Tiles, I would like help choosing tiles.")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              href={makeWhatsapp("Hi New Royal Tiles, please send me your latest tile catalogue and collections.")}
              target="_blank"
              rel="noreferrer"
            >
              Request catalogue
            </a>
          </div>

          <div>
            <span>Our showrooms</span>
            <div className="footerBranchList">
              {branches.map((branch) => (
                <a
                  key={branch.slug}
                  href={branchDirections(branch)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {branch.name}
                </a>
              ))}
            </div>
            <p>
              Valayambattu · Vellore · Gudiyatham · Pernambut
            </p>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {new Date().getFullYear()} New Royal Tiles. All rights reserved.</span>
          <span>Mobile-first tile discovery with showroom support.</span>
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
