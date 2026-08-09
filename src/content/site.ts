import hero from "@/assets/hero-parkwood.jpg";
import logo from "@/assets/logo-parkwood.png";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.jpg";

/**
 * All editable site content lives here.
 * Replace text and images below without touching any component.
 */

export const company = {
  name: "Parkwood Properties",
  tagline: "Built on Trust - Backed by Experience",
  email: "admin@parkwoodproperties.ae",
  website: "www.parkwoodproperties.ae",
  websiteHref: "https://www.parkwoodproperties.ae",
  logo,
};

export const nav = [
  { label: "About Us", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Communities", to: "/communities" as const },
  { label: "Request Appraisal", to: "/request-appraisal" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export type SocialIcon = "linkedin" | "facebook" | "instagram";

export const socials: { label: string; href: string; icon: SocialIcon }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/parkwood-properties-dubai/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592645326753",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/propertiesparkwood/",
    icon: "instagram",
  },
];

export type Listing = {
  name: string;
  price: string;
  place: string;
  tenure: string;
  image: string;
  tag?: string;
};

export const featuredHero = {
  image: hero,
  imageAlt: "Contemporary Dubai villa with stone elevations and a reflecting pool at golden hour",
  quote: ["WE SHAPE OUR BUILDINGS,", "AND AFTERWARDS OUR BUILDINGS SHAPE US."],
  quoteAttribution: "— Winston Churchill",
};

export const prime: Listing[] = [
  {
    name: "Palm Grove Villa",
    price: "AED 12,500,000",
    place: "Dubai Hills Estate",
    tenure: "Freehold",
    image: p6,
  },
  {
    name: "Creek Residence",
    price: "AED 8,900,000",
    place: "Dubai Creek Harbour",
    tenure: "Freehold",
    image: p1,
  },
  {
    name: "Lagoon House",
    price: "AED 6,450,000",
    place: "The Valley",
    tenure: "Freehold",
    image: p3,
  },
];

export const recent: Listing[] = [
  {
    name: "Boulevard Apartment",
    price: "AED 3,200,000",
    place: "Downtown Dubai",
    tenure: "Freehold",
    image: p2,
    tag: "New",
  },
  {
    name: "Ranches Townhouse",
    price: "AED 2,750,000",
    place: "Arabian Ranches III",
    tenure: "Freehold",
    image: p5,
    tag: "New",
  },
  {
    name: "South Garden Villa",
    price: "AED 2,150,000",
    place: "Emaar South",
    tenure: "Freehold",
    image: p4,
    tag: "New",
  },
];

export type Community = {
  slug: string;
  name: string;
  description: string;
  image: string;
  ctaLabel?: string;
};

export const communities: Community[] = [
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    description:
      "The city's central district — boulevard apartments and penthouses beside the fountain, opera house and Burj Khalifa.",
    image: p2,
  },
  {
    slug: "the-valley",
    name: "The Valley",
    description:
      "A quieter townhouse and villa community along the Dubai–Al Ain Road, with sports fields, pocket parks and a town centre.",
    image: p5,
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    description:
      "Villas and apartments set within an 18-hole championship golf course, mature parkland and tree-lined boulevards.",
    image: c3,
  },
  {
    slug: "the-oasis-by-emaar",
    name: "The Oasis by Emaar",
    description:
      "Mansions and large-plot villas arranged around lagoons, water canals and swimmable lakes on the western edge of the city.",
    image: p3,
  },
  {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    description:
      "A waterfront district on the historic creek, built around a marina promenade, parks and long views back to the skyline.",
    image: c1,
  },
  {
    slug: "rachid-yachts-and-marina",
    name: "Rachid Yachts & Marina",
    description:
      "A marina address for apartments and penthouses, with berths, a yacht club and a walkable waterfront.",
    image: c4,
  },
  {
    slug: "arabian-ranches-iii",
    name: "Arabian Ranches III",
    description:
      "Family townhouses and villas built around a central park, lazy river and clubhouse, in a mature ranches setting.",
    image: p1,
  },
  {
    slug: "emaar-south",
    name: "Emaar South",
    description:
      "Golf-side homes and apartments close to Al Maktoum International, laid out around parks and community retail.",
    image: p4,
  },
  {
    slug: "grand-polo-club-and-resort",
    name: "Grand Polo Club & Resort",
    description:
      "An equestrian-led community of low villas, stables and bridle paths, planned around open green space.",
    image: c2,
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaTo?: string;
};

export const services: Service[] = [
  {
    slug: "buy",
    title: "Buy",
    description:
      "We shortlist, view and negotiate on your behalf — from off-plan releases to resale homes in established communities.",
    image: p1,
    ctaLabel: "Talk to us",
    ctaTo: "/contact",
  },
  {
    slug: "sell",
    title: "Sell",
    description:
      "Photography, copy and placement handled in-house, with a considered launch to a design-minded audience.",
    image: p6,
    ctaLabel: "Request an appraisal",
    ctaTo: "/request-appraisal",
  },
  {
    slug: "rent",
    title: "Rent",
    description:
      "Leasing and letting across apartments, townhouses and villas, including tenant vetting and contract administration.",
    image: p2,
    ctaLabel: "Talk to us",
    ctaTo: "/contact",
  },
  {
    slug: "mortgage",
    title: "Mortgage",
    description:
      "Independent mortgage guidance: pre-approval, lender comparison and paperwork, coordinated alongside your purchase.",
    image: p3,
    ctaLabel: "Talk to us",
    ctaTo: "/contact",
  },
  {
    slug: "property-handover",
    title: "Property Handover",
    description:
      "Snagging, inspection and key collection managed end to end, so a completed home is ready the day you take it on.",
    image: p4,
    ctaLabel: "Talk to us",
    ctaTo: "/contact",
  },
];

export const about = {
  hero: {
    kicker: "About Us",
    title: "An estate agency built around design, not volume",
    body: "We represent a small number of homes at a time and give each one the attention it deserves.",
    image: hero,
    imageAlt: "Interior of an architect-designed home",
  },
  intro: {
    title: "Who we are",
    body: [
      "Parkwood Properties is a Dubai property consultancy working across Emaar's masterplanned communities. We advise buyers, sellers, landlords and tenants on homes where architecture and everyday living matter equally.",
      "Our team comes from architecture, publishing and brokerage. That mix shapes how we photograph a home, how we describe it, and how we advise on price.",
    ],
  },
  story: {
    title: "Our story",
    body: [
      "We started with a simple observation: the best homes in the city were being sold with the same twelve photographs and the same paragraph of copy as everything else.",
      "So we built an agency around the opposite instinct — fewer listings, better documentation, and honest counsel about what a property is actually worth.",
    ],
    image: p6,
    imageAlt: "Converted barn with timber and glass elevation",
  },
  values: [
    {
      title: "Considered selection",
      body: "We take on homes we would happily live in ourselves, and say so plainly when a property is not right.",
    },
    {
      title: "Documented properly",
      body: "Every home is photographed and written in-house, with plans, materials and orientation recorded.",
    },
    {
      title: "Advice, then transaction",
      body: "Valuations, mortgage guidance and handover support come before any push to close.",
    },
  ],
  closing: {
    title: "Thinking of selling or letting?",
    body: "Send us a few details about your property and we will come back with an appraisal and a recommended approach.",
    ctaLabel: "Request an appraisal",
    ctaTo: "/request-appraisal" as const,
  },
};

export const propertyTypes = [
  "Apartment",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Plot / Land",
  "Commercial",
  "Other",
];

export const inquiryTypes = [
  "Property Inquiry",
  "Job / Career Inquiry",
  "Feedback",
  "General Inquiry",
  "Other",
];
