import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Clock3,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import {
  directionsHref,
  logoUrl,
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
          <div className="eyebrow light">NEW ROYAL TILES · 4 SHOWROOMS</div>
          <h1>
            Surfaces that define
            <br />
            remarkable spaces.
          </h1>
          <p>
            Discover refined tiles for floors, walls, bathrooms, kitchens and exteriors —
            then preview a tile direction in your own room before visiting the showroom.
          </p>

          <div className="heroButtons">
            <a className="primaryButton heroCta" href="#collections">
              Explore collections <ArrowRight size={18} />
            </a>
            <a className="secondaryButton heroCta" href="#visualizer">
              <Sparkles size={18} /> Visualize in your room
            </a>
          </div>

          <div className="heroMeta">
            <span><Star size={16} fill="currentColor" /> 4.3 Google rating</span>
            <span>4 showroom locations</span>
            <span>தமிழ் · English assistance</span>
          </div>
        </div>

        <div className="heroCard">
          <img className="heroCardLogo" src={logoUrl} alt="" aria-hidden="true" />
          <span className="heroCardLabel">FLAGSHIP SHOWROOM</span>
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
        <div><Sparkles /><span><strong>Room visualizer</strong><small>Preview before you visit</small></span></div>
        <div><ShieldCheck /><span><strong>Practical advice</strong><small>Use, maintenance & suitability</small></span></div>
        <div><MessageCircle /><span><strong>4 local showrooms</strong><small>Visit the nearest branch</small></span></div>
      </section>
    </>
  );
}
