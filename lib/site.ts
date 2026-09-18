export const phoneDisplay = "+91 81238 68746";
export const phoneHref = "tel:+918123868746";
export const whatsappBase = "https://wa.me/918123868746";
export const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=New+Royal+Tiles+Valayampattu+MC+Road+Tamil+Nadu+635751";

export function makeWhatsapp(message: string) {
  return whatsappBase + "?text=" + encodeURIComponent(message);
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "New Royal Tiles",
  description:
    "Tiles showroom offering floor, wall, bathroom, kitchen, outdoor and designer tile solutions.",
  telephone: "+918123868746",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "M C Road, Valayampattu",
    addressLocality: "Valayambattu",
    addressRegion: "Tamil Nadu",
    postalCode: "635751",
    addressCountry: "IN"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.3",
    reviewCount: "210"
  }
};
