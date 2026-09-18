import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
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
          title="New Royal Tiles location map"
          src="https://www.google.com/maps?q=New%20Royal%20Tiles%20Valayampattu%20M%20C%20Road%20Tamil%20Nadu%20635751&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="showroomDetails">
        <div className="eyebrow">COME SEE THE DIFFERENCE</div>
        <h2>Your shortlist gets better in person.</h2>
        <p>
          Screens can show the direction. The showroom lets you judge the real
          surface — scale, gloss, texture, shade and how it feels under light.
        </p>

        <div className="contactRows">
          <div>
            <MapPin />
            <span>
              <small>Address</small>
              <strong>Valayampattu, M C Road, Valayambattu, Tamil Nadu 635751</strong>
            </span>
          </div>
          <div>
            <Phone />
            <span>
              <small>Call the showroom</small>
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
            <MapPin size={18} /> Get directions
          </a>
          <a
            className="outlineButton"
            href={makeWhatsapp("Hi New Royal Tiles, I am planning to visit the showroom.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Message first
          </a>
        </div>
      </div>
    </section>
  );
}
