"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";
import { branches } from "@/lib/branches";
import { makeWhatsapp } from "@/lib/site";

export default function Enquiry() {
  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const branch = String(data.get("branch") || "");
    const space = String(data.get("space") || "");
    const area = String(data.get("area") || "");
    const message = String(data.get("message") || "");

    const text =
      "Hi New Royal Tiles, I would like help choosing tiles.\n\nName: " +
      name +
      "\nPhone: " +
      phone +
      "\nPreferred branch: " +
      branch +
      "\nSpace: " +
      space +
      "\nApprox area: " +
      (area || "Not sure yet") +
      "\nRequirement: " +
      message;

    window.open(makeWhatsapp(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="enquirySection" id="enquiry">
      <div className="enquiryIntro">
        <div className="eyebrow light">QUICK QUOTE · 4 SHOWROOMS</div>
        <h2>Tell us what you are building.</h2>
        <p>
          Share the basics once and continue directly on WhatsApp. Add your preferred
          branch and approximate area so the showroom team can respond with more
          relevant options.
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

        <div className="formRow">
          <label>
            <span>Preferred branch</span>
            <select name="branch" defaultValue="Valayambattu">
              {branches.map((branch) => (
                <option key={branch.slug} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Approx area</span>
            <input
              name="area"
              inputMode="decimal"
              placeholder="Example: 900 sq ft"
            />
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
            placeholder="Example: warm beige matte floor tiles, easy maintenance, premium finish"
          />
        </label>

        <p className="branchSelectHint">
          You can change the branch later on WhatsApp. No account or sign-up required.
        </p>

        <button className="primaryButton formSubmit" type="submit">
          Get options on WhatsApp <ArrowRight size={18} />
        </button>
      </form>
    </section>
  );
}
