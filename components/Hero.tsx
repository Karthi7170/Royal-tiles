import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Clock3,
  Layers3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star
} from "lucide-react";
import {
  directionsHref,
  logoUrl,
  makeWhatsapp,
  showroomImageUrl
} from "@/lib/site";

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <img
          className="heroImage"
          src={showroomImageUrl}
          alt="New Royal Tiles showroom exterior in Valayampattu, Tamil Nadu"
        />
        <div className="heroOverlay" />

        <div className="heroContent">
          <div className="eyebrow light">NEW ROYAL TILES · VALAYAMBATTU</div>
          <h1>
            Surfaces that define
            <br />
            remarkable spaces.
          </h1>
          <p>
            Discover refined tiles for floors, walls, bathrooms, kitchens and exteriors —
            thoughtfully curated for elegant homes, lasting performance and everyday living.
          </p>

          <div className="heroButtons">
            <a className="primaryButton heroCta" href="#collections">
              Explore collections <ArrowRight size={18} />
            </a>
            <a
              className="secondaryButton heroCta"
              href={makeWhatsapp("Hi New Royal Tiles, I want recommendations for my space.")}
              target="_blank"
              rel="noreferrer"
            >
              Get tile recommendations
            </a>
          </div>

          <div className="heroMeta">
            <span><Star size={16} fill="currentColor" /> 4.3 Google rating</span>
            <span>210 reviews</span>
            <span>தமிழ் · English assistance</span>
          </div>
        </div>

        <div className="heroCard">
          <img className="heroCardLogo" src={logoUrl} alt="" aria-hidden="true" />
          <span className="heroCardLabel">OUR SHOWROOM</span>
          <strong>See the finish. Feel the texture.</strong>
          <p>M C Road, Valayampattu, Tamil Nadu 635751</p>
          <div className="heroCardFooter">
            <span><Clock3 size={16} /> Opens 9:30 AM</span>
            <a href={directionsHref} target="_blank" rel="noreferrer">
              Get directions <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="trustStrip" aria-label="Showroom benefits">
        <div><Layers3 /><span><strong>Wide selection</strong><small>Room to room choices</small></span></div>
        <div><BadgeCheck /><span><strong>Guided buying</strong><small>Help comparing finishes</small></span></div>
        <div><ShieldCheck /><span><strong>Practical advice</strong><small>Use, maintenance & suitability</small></span></div>
        <div><MessageCircle /><span><strong>Fast assistance</strong><small>Call or WhatsApp directly</small></span></div>
      </section>
    </>
  );
}
