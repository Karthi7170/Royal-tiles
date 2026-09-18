"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";
import { makeWhatsapp } from "@/lib/site";

export default function Enquiry() {
  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const space = String(data.get("space") || "");
    const message = String(data.get("message") || "");

    const text =
      "Hi New Royal Tiles, I would like help choosing tiles.\n\nName: " +
      name +
      "\nPhone: " +
      phone +
      "\nSpace: " +
      space +
      "\nRequirement: " +
      message;

    window.open(makeWhatsapp(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="enquirySection">
      <div className="enquiryIntro">
        <div className="eyebrow light">QUICK ENQUIRY</div>
        <h2>Tell us what you are building.</h2>
        <p>
          Send the basics now. The form opens WhatsApp with your requirement
          already formatted, so you can continue the conversation directly with
          the showroom.
        </p>
      </div>

      <form className="enquiryForm" onSubmit={handleEnquiry}>
        <div className="formRow">
          <label>
            <span>Your name</span>
            <input name="name" required placeholder="Name" />
          </label>
          <label>
            <span>Phone number</span>
            <input name="phone" required inputMode="tel" placeholder="+91" />
          </label>
        </div>

        <label>
          <span>Which space?</span>
          <select name="space" defaultValue="Full home">
            <option>Full home</option>
            <option>Living / floor</option>
            <option>Bathroom</option>
            <option>Kitchen</option>
            <option>Outdoor / elevation</option>
            <option>Commercial space</option>
          </select>
        </label>

        <label>
          <span>What are you looking for?</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Example: warm beige matte floor tiles, around 900 sq ft"
          />
        </label>

        <button className="primaryButton formSubmit" type="submit">
          Continue on WhatsApp <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}
