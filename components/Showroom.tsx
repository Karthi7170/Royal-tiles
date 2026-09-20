import { ArrowRight, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  directionsHref,
  makeWhatsapp,
  phoneDisplay,
  phoneHref
} from "@/lib/site";

export default function Showroom() {
  return (
    <section className="showroomSection" id="showroom">
      <div className="showroomMap">
        <iframe
          title="New Royal Tiles Valayambattu flagship showroom map"
          src="https://www.google.com/maps?q=New%20Royal%20Tiles%20Valayampattu%20M%20C%20Road%20Tamil%20Nadu%20635751&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="showroomDetails">
        <div className="eyebrow">VALAYAMBATTU FLAGSHIP</div>
        <h2>Your shortlist gets better in person.</h2>
        <p>
          Use the online visualizer to narrow your direction, then visit a showroom
          to judge the real scale, shade, texture, gloss and finish under natural
          light. The map here shows our Valayambattu flagship; all four locations are
          listed in the branch finder above.
        </p>

        <div className="contactRows">
          <div>
            <MapPin />
            <span>
              <small>Flagship address</small>
              <strong>No. 192/B, M C Road, Valayampattu, Vaniyambadi, Tamil Nadu 635751</strong>
            </span>
          </div>
          <div>
            <Phone />
            <span>
              <small>Call the main showroom</small>
              <a href={phoneHref}>{phoneDisplay}</a>
            </span>
          </div>
          <div>
            <Clock3 />
            <span>
              <small>Opening time shown on Google</small>
              <strong>9:30 AM</strong>
            </span>
          </div>
        </div>

        <div className="showroomActions">
          <a className="primaryButton" href={directionsHref} target="_blank" rel="noreferrer">
            <MapPin size={18} /> Flagship directions
          </a>
          <a className="outlineButton" href="#branches">
            All 4 branches <ArrowRight size={18} />
          </a>
          <a
            className="outlineButton"
            href={makeWhatsapp("Hi New Royal Tiles, I am planning a showroom visit. Please help me with the best branch and tile options.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Plan my visit
          </a>
        </div>
      </div>
    </section>
  );
}
