import { branchDirections, branches } from "@/lib/branches";

export const phoneDisplay = "+91 81238 68746";
export const phoneHref = "tel:+918123868746";
export const whatsappBase = "https://wa.me/918123868746";
export const directionsHref = branchDirections(branches[0]);

export const logoUrl =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3JFN34Qe7I15a2A1mQucztzlTZR/3361c546-b5ae-485b-8bf1-89b64083b9e3.png";

export const showroomImageUrl =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3JFN34Qe7I15a2A1mQucztzlTZR/ef23538b-ae88-453b-9cad-bfc5acc92fba.png";

export function makeWhatsapp(message: string) {
  return whatsappBase + "?text=" + encodeURIComponent(message);
}

const branchSchemas = branches.map((branch) => ({
  "@type": "HomeAndConstructionBusiness",
  "@id": "#showroom-" + branch.slug,
  name: "New Royal Tiles - " + branch.name,
  description:
    "New Royal Tiles showroom for floor tiles, wall tiles, bathroom tiles, kitchen tiles, outdoor tiles and designer surfaces.",
  telephone: branch.phoneHref ? branch.phoneHref.replace("tel:", "") : undefined,
  priceRange: "₹₹",
  image: showroomImageUrl,
  logo: logoUrl,
  hasMap: branchDirections(branch),
  parentOrganization: {
    "@id": "#new-royal-tiles"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: branch.address,
    addressLocality: branch.name,
    addressRegion: "Tamil Nadu",
    addressCountry: "IN"
  },
  ...(branch.featured
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.3",
          reviewCount: "210"
        }
      }
    : {})
}));

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "#new-royal-tiles",
      name: "New Royal Tiles",
      description:
        "Multi-branch tiles showroom serving Valayambattu, Vellore, Gudiyatham and Pernambut with floor, wall, bathroom, kitchen, outdoor and designer tile solutions.",
      logo: logoUrl,
      telephone: "+918123868746",
      areaServed: [
        "Vaniyambadi",
        "Vellore",
        "Gudiyatham",
        "Pernambut"
      ]
    },
    ...branchSchemas
  ]
};
