import { ArrowRight } from "lucide-react";
import { inspirations } from "@/lib/data";
import { makeWhatsapp } from "@/lib/site";

export default function Inspiration() {
  return (
    <>
      <section className="editorial">
        <div className="editorialImageWrap">
          <img
            src="https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1600&q=90"
            alt="Refined tiled interior with warm neutral finishes"
            loading="lazy"
          />
          <div className="editorialBadge">
            <span>01</span>
            <p>Shortlist online.<br />Compare in person.</p>
          </div>
        </div>

        <div className="editorialCopy">
          <div className="eyebrow light">A BETTER SHOWROOM JOURNEY</div>
          <h2>Less scrolling. Less confusion. Better choices.</h2>
          <p>
            Premium tile websites work best when they do more than display a giant
            catalogue. New Royal Tiles is structured around the decisions customers
            actually make: room, look, finish, size and budget.
          </p>

          <div className="editorialPoints">
            <div>
              <span>01</span>
              <div><strong>Find your direction</strong><p>Browse by room and visual style.</p></div>
            </div>
            <div>
              <span>02</span>
              <div><strong>Get human guidance</strong><p>Share references over WhatsApp before visiting.</p></div>
            </div>
            <div>
              <span>03</span>
              <div><strong>Confirm at the showroom</strong><p>See actual tone, texture and finish in person.</p></div>
            </div>
          </div>

          <a
            className="inlineLink"
            href={makeWhatsapp("Hi New Royal Tiles, can you help me shortlist tiles before I visit?")}
            target="_blank"
            rel="noreferrer"
          >
            Start a WhatsApp shortlist <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="section inspirationSection" id="inspiration">
        <div className="sectionHeading">
          <div className="eyebrow">ROOM INSPIRATION</div>
          <h2>See a complete mood, not just one tile.</h2>
          <p>
            Save the look you like and send it to the showroom. We can help you find
            a similar direction across different budgets and formats.
          </p>
        </div>

        <div className="inspirationGrid">
          {inspirations.map((item, index) => (
            <a
              className={"inspirationCard card" + (index + 1)}
              key={item.title}
              href={makeWhatsapp("Hi New Royal Tiles, I like the " + item.title + " look. Please suggest similar tiles.")}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.image} alt={item.title + " room inspiration"} loading="lazy" />
              <div className="inspirationCaption">
                <span>{item.note}</span>
                <strong>{item.title}</strong>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
