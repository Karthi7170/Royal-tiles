export type Branch = {
  slug: string;
  name: string;
  area: string;
  address: string;
  phone?: string;
  phoneHref?: string;
  featured?: boolean;
};

export const branches: Branch[] = [
  {
    slug: "valayambattu",
    name: "Valayambattu",
    area: "Vaniyambadi",
    address: "No. 192/B, M C Road, Valayampattu, Vaniyambadi, Tamil Nadu 635751",
    phone: "+91 81238 68746",
    phoneHref: "tel:+918123868746",
    featured: true
  },
  {
    slug: "vellore",
    name: "Vellore",
    area: "Konavattam",
    address: "538, Bangalore Road, next to GS Mahal, Konavattam, Vellore, Tamil Nadu 632001",
    phone: "+91 84602 32569",
    phoneHref: "tel:+918460232569"
  },
  {
    slug: "gudiyatham",
    name: "Gudiyatham",
    area: "Sedukkarai",
    address: "5, R S Road, opposite TNSTC Depot, Nehruji Nagar, Sedukkarai, Gudiyatham, Tamil Nadu 635803"
  },
  {
    slug: "pernambut",
    name: "Pernambut",
    area: "Sathkar",
    address: "High Road, opposite CRB Tannery, Sathkar, Pernambut, Tamil Nadu 635810",
    phone: "+91 97900 11533",
    phoneHref: "tel:+919790011533"
  }
];

export function branchDirections(branch: Branch) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("New Royal Tiles " + branch.address);
}
