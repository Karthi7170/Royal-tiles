import { Star } from "lucide-react";
import { reviewCards } from "@/lib/data";

export default function Proof() {
  return (
    <section className="section proofSection">
      <div className="ratingBlock">
        <div className="eyebrow">LOCAL TRUST</div>
        <div className="ratingNumber">4.3</div>
        <div className="stars" aria-label="4.3 out of 5 stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={21} fill="currentColor" />
          ))}
        </div>
        <strong>210 Google reviews</strong>
        <p>
          The existing Google presence is already a strong trust signal. The website
          now gives that local reputation a premium digital home.
        </p>
      </div>

      <div className="reviewGrid">
        {reviewCards.map((review) => (
          <article className="reviewCard" key={review.name}>
            <div className="quoteMark">“</div>
            <p>{review.quote}</p>
            <span>{review.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
