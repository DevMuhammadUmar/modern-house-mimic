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
  logo: "/logo.svg",
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
  image: "/hero.jpeg",
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
    image: "/downtown dubai.avif",
  },
  {
    slug: "the-valley",
    name: "The Valley",
    description:
      "A quieter townhouse and villa community along the Dubai–Al Ain Road, with sports fields, pocket parks and a town centre.",
    image: "/the-valley.jpg",
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    description:
      "Villas and apartments set within an 18-hole championship golf course, mature parkland and tree-lined boulevards.",
    image: "/dubai hills state.avif",
  },
  {
    slug: "the-oasis-by-emaar",
    name: "The Oasis by Emaar",
    description:
      "Mansions and large-plot villas arranged around lagoons, water canals and swimmable lakes on the western edge of the city.",
    image: "/oasis by emaar.avif",
  },
  {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    description:
      "A waterfront district on the historic creek, built around a marina promenade, parks and long views back to the skyline.",
    image: "/dubai creek.avif",
  },
  {
    slug: "rashid-yachts-and-marina",
    name: "Rashid Yachts & Marina",
    description:
      "A marina address for apartments and penthouses, with berths, a yacht club and a walkable waterfront.",
    image: "/rashid yacht.avif",
  },
  {
    slug: "arabian-ranches-iii",
    name: "Arabian Ranches III",
    description:
      "Family townhouses and villas built around a central park, lazy river and clubhouse, in a mature ranches setting.",
    image: "/arabian ranches.avif",
  },
  {
    slug: "emaar-south",
    name: "Emaar South",
    description:
      "Golf-side homes and apartments close to Al Maktoum International, laid out around parks and community retail.",
    image: "/emaar south.avif",
  },
  {
    slug: "grand-polo-club-and-resort",
    name: "Grand Polo Club & Resort",
    description:
      "An equestrian-led community of low villas, stables and bridle paths, planned around open green space.",
    image: "/grand-polo.jpeg",
  },
  {
    slug: "emaar-beachfront",
    name: "Emaar Beachfront",
    description:
      "A private island address at Dubai Harbour, with 1.5 km of shoreline, sea-view apartments and easy access to Dubai Marina.",
    image: "/beachfront.avif",
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

export const services: Service[] = [
  {
    slug: "buy",
    title: "Buy",
    description:
      "We shortlist, view and negotiate on your behalf — from off-plan releases to resale homes in established communities.",
    image: "/buy.jpeg",
    imageAlt: "Luxury Dubai residential property for sale",
    ctaLabel: "Talk to us",
    ctaTo: "/contact",
  },
  {
    slug: "sell",
    title: "Sell",
    description:
      "Photography, copy and placement handled in-house, with a considered launch to a design-minded audience.",
    image: "/sell.jpeg",
    imageAlt: "Contemporary Dubai villa prepared for sale",
    ctaLabel: "Request an appraisal",
    ctaTo: "/request-appraisal",
  },
  {
    slug: "rent",
    title: "Rent",
    description:
      "Leasing and letting across apartments, townhouses and villas, including tenant vetting and contract administration.",
    image: "/rent.jpeg",
    imageAlt: "Modern Dubai apartment available for lease",
    ctaLabel: "Talk to us",
    ctaTo: "/contact",
  },
  {
    slug: "mortgage",
    title: "Mortgage",
    description:
      "Independent mortgage guidance: pre-approval, lender comparison and paperwork, coordinated alongside your purchase.",
    image: "/mortgage.jpeg",
    imageAlt: "Architectural home in Dubai residential community",
    ctaLabel: "Talk to us",
    ctaTo: "/contact",
  },
  {
    slug: "property-handover",
    title: "Property Handover",
    description:
      "With our extensive experience in Emaar's policies, procedures, and handover requirements, we manage snagging, inspection, and key collection end to end — ensuring your completed home is ready and compliant the day you take it on.",
    image: "/property-handover.jpeg",
    imageAlt: "Completed luxury home ready for property handover in Dubai",
    ctaLabel: "Talk to us",
    ctaTo: "/contact",
  },
];

export const about = {
  hero: {
    kicker: "About Us",
    title: "Experience that helps you buy, sell and rent smarter",
    body: "With deep knowledge of Emaar communities, we focus on the right property, the right advice and the right deal.",
    image: "/about us.jpeg",
    imageAlt: "Parkwood Properties office and team",
  },
  intro: {
    title: "Who we are",
    body: [
      "Parkwood Properties is a Dubai property consultancy specializing in the secondary market, with a focus on Emaar's master planned communities.",
      "We advise buyers, sellers, landlords and tenants on residential property, providing practical guidance on pricing, positioning, negotiations and the transaction process.",
      "Our approach is shaped by experience in property development and real estate, giving us a practical understanding of both the property itself and its position in the market.",
    ],
  },
  story: {
    title: "Our story",
    body: [
      "Parkwood began with a simple belief: a property is more than a listing on a portal. Behind every address is a place, a decision, and a chapter in someone's life.",
      "Our journey into real estate has taken us through property development and the secondary market, where no two homes, circumstances or decisions are quite the same. Along the way, we learned that good advice often comes down to seeing the details others overlook — understanding the home, reading the market and knowing when to speak plainly.",
      "Parkwood was built from that experience: a property consultancy shaped by a quieter, more considered way of doing real estate.",
    ],
    image: "/our story.jpeg",
    imageAlt: "Parkwood Properties — our story",
  },
  values: [
    {
      title: "Look beyond the listing",
      body: "We begin with the property itself — its condition, setting, strengths and limitations — then place it in the context of the wider market.",
    },
    {
      title: "Price with perspective",
      body: "Good advice starts with a realistic view of value. We consider comparable properties, current demand and market conditions to arrive at a position that makes sense.",
    },
    {
      title: "Stay with the process",
      body: "A property transaction is rarely just one decision. From the first conversation through viewings, negotiation, documentation and handover, we remain involved and keep the process moving with clarity.",
    },
  ],
  closing: {
    title: "Thinking of selling or leasing?",
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
