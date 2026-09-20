import {
  ArrowUpRight,
  Building2,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";
import { branchDirections, branches } from "@/lib/branches";
import { makeWhatsapp } from "@/lib/site";

export default function Branches() {
  return (
    <section className="section branchesSection" id="branches">
      <div className="sectionHeading splitHeading branchesHeading">
        <div>
          <div className="eyebrow">4 SHOWROOMS · ONE ROYAL EXPERIENCE</div>
          <h2>Find the New Royal Tiles showroom closest to you.</h2>
        </div>
        <p>
          Browse online, shortlist your style and continue at the branch that is most
          convenient for you. Every branch card gives you a direct route and a quick
          way to share your requirement before you visit.
        </p>
      </div>

      <div className="branchGrid">
        {branches.map((branch, index) => (
          <article className={branch.featured ? "branchCard featured" : "branchCard"} key={branch.slug}>
            <div className="branchTop">
              <span className="branchIndex">0{index + 1}</span>
              <Building2 size={22} />
            </div>

            <div className="branchCopy">
              <span>{branch.featured ? "FLAGSHIP SHOWROOM" : "NEW ROYAL TILES"}</span>
              <h3>{branch.name}</h3>
              <small>{branch.area}</small>
              <p>
                <MapPin size={17} />
                {branch.address}
              </p>
            </div>

            <div className="branchActions">
              <a
                className="branchPrimary"
                href={branchDirections(branch)}
                target="_blank"
                rel="noreferrer"
              >
                Get directions <ArrowUpRight size={16} />
              </a>

              {branch.phoneHref ? (
                <a className="branchSecondary" href={branch.phoneHref}>
                  <Phone size={15} /> {branch.phone}
                </a>
              ) : (
                <a
                  className="branchSecondary"
                  href={makeWhatsapp(
                    "Hi New Royal Tiles, I would like details for your " + branch.name + " showroom."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} /> Ask on WhatsApp
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="branchHelp">
        <div>
          <span>NOT SURE WHICH BRANCH?</span>
          <strong>Send your location or pincode. We will guide you to the easiest showroom.</strong>
        </div>
        <a
          className="primaryButton"
          href={makeWhatsapp("Hi New Royal Tiles, please help me find the nearest branch. My location/pincode is: ")}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} /> Find my nearest branch
        </a>
      </div>
    </section>
  );
}
