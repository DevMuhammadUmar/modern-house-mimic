import { communities } from "@/content/site";

/**
 * Long-form detail content for each community page (/communities/:slug).
 * Replace the placeholder copy, images and stat values below — layout code
 * never needs to change.
 */

export type CommunityStat = {
  /** Icon name, resolved by the icon map in the detail route. */
  icon: string;
  value: string;
  label: string;
  highlighted?: boolean;
};

export type CommunityDetail = {
  slug: string;
  name: string;
  /** Large banner image, sits between the first and second paragraph. */
  heroImage: string;
  heroCaption?: string;
  overview: {
    heading: string;
    /** Paragraphs to display before the hero image. */
    paragraphs: string[];
    /** Optional heading to display before the remaining paragraphs below the hero image. */
    restHeading?: string;
    /** Paragraphs to display after the hero image. */
    restParagraphs?: string[];
  };
  amenities?: {
    heading: string;
    intro: string;
    stats: CommunityStat[];
  };
};

const byName = new Map(communities.map((c) => [c.slug, c]));

/** Placeholder detail entry generated from the tile data. */
function seed(slug: string, extra?: Partial<CommunityDetail>): CommunityDetail {
  const tile = byName.get(slug);
  const name = tile?.name ?? slug;
  return {
    slug,
    name,
    heroImage: tile?.image ?? "",
    overview: {
      heading: name.toUpperCase(),
      paragraphs: [
        tile?.description ?? "",
      ],
      restParagraphs: [
        "Placeholder copy — final wording for this community will be added here. This second paragraph continues below the banner image and can be followed by any number of further paragraphs.",
      ]
    },
    ...extra,
  };
}

export const communityDetails: CommunityDetail[] = [
  seed("downtown-dubai", {
    overview: {
      heading: "DOWNTOWN DUBAI",
      paragraphs: [
        "Downtown Dubai, our flagship mega-development, aptly named The Centre of Now, spans two of the most prestigious square kilometres in the city. Positioned between Sheikh Zayed Road and Financial Centre Road, this dynamic hub has driven the economy and cemented Dubai’s reputation as a true global icon.",
        "At the heart of the emirate, Downtown Dubai offers a metropolitan lifestyle surrounded by world-class landmarks, entertainment, and glamour. One of the key attractions in the area is Dubai Mall, the world’s largest shopping mall, offering an unrivalled selection of retail and dining options.",
        "Properties in Downtown Dubai represent the pinnacle of luxury living, with a skyline dominated by contemporary high-rise residences, complemented by world-class amenities and a thriving cultural scene. From sleek condominiums with panoramic views of the iconic skyline to elegant townhouses nestled along tree-lined avenues, each home exudes sophistication and style.",
        "With premium amenities such as private pools, state-of-the-art fitness centres, and exclusive concierge services, these properties elevate the concept of urban living to new heights. Whether seeking a cosmopolitan penthouse or a family-friendly retreat, Downtown Dubai offers an unmatched opportunity to experience the epitome of opulent city living."
      ],
      restHeading: "Amenities",
      restParagraphs: [
        "In the vibrant district of Dubai Downtown, where apartments for sale are in high demand, residents are treated to an abundance of world-class amenities. Whether you’re looking to buy an apartment in Downtown Dubai, this dynamic area offers everything you need for a luxurious lifestyle. Luxury accommodations such as Address Residences in Downtown which is a prime example of the high-end living option available in the area.",
        "Downtown Dubai is the vibrant heart of the city and one of its most luxurious areas, attracting those who crave a glamorous lifestyle. Imagine stepping out of your home into a world of opulence, with access to state-of-the-art fitness centres, luxurious spas, and pristine swimming pools. This is why people who desire a lavish lifestyle choose to buy apartments in Downtown Dubai."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Discover the spectacular landmarks that make Downtown Dubai a global icon.",
      stats: [
        { icon: "building", value: "Burj Khalifa", label: "The World's Tallest Building" },
        { icon: "building", value: "Dubai Opera", label: "2000 Seat Multi-format Venue" },
        { icon: "retail", value: "Souk Al Bahar", label: "Luxury Arabian Market" },
        { icon: "pool", value: "The Dubai Fountain", label: "The World’s Largest Choreographed Fountain System" },
        { icon: "retail", value: "The Dubai Mall", label: "The World’s Most Visited Retail & Entertainment Destination" },
        { icon: "area", value: "Burj Khalifa Lake", label: "Over 120,000 sqm Man-made Lake" },
        { icon: "building", value: "5-star Hotels", label: "Home to the Luxurious Address and Vida Hotels" },
        { icon: "building", value: "Upscale Business Hub", label: "Prestigious Address for Businesses" }
      ]
    }
  }),
  seed("the-valley", {
    overview: {
      heading: "THE VALLEY",
      paragraphs: [
        "The Valley is a picturesque and dynamic community where contemporary neighbourhoods are woven into a tapestry of vibrant greenery. Located along Dubai-Al Ain Road, it strikes the perfect balance between serenity and accessibility—an escape from the city’s hustle yet still connected to all that Dubai has to offer.",
        "At the heart of the community, the Town Centre comes alive with vibrant cafés, boutique stores, and alfresco dining spots, making it the ideal social hub. Families can enjoy pocket parks, imaginative play areas, and scenic picnic spots while keeping healthy at jogging trails and outdoor fitness zones. Residents can unwind at the nearby Golden Beach, where the tranquil waters and sandy shores provide the ideal place to relax.",
        "The community offers a diverse selection of beautifully designed properties, from elegant villas to contemporary townhouses. Whether you’re seeking a peaceful retreat or a cosy home, these properties provide the ideal setting for your next chapter. Crafted to complement the vibrant surroundings, each place offers an exceptional balance of luxury and comfort.",
        "More than just a community, The Valley is a canvas for your dreams—where nature, recreation, and modern living come together in perfect harmony. Elevate your lifestyle and ignite your aspirations here."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Discover the spectacular lifestyle offerings woven throughout The Valley.",
      stats: [
        { icon: "pool", value: "47,000 sqm", label: "Golden Beach" },
        { icon: "park", value: "13,000 sqm", label: "Kids Dale" },
        { icon: "area", value: "61,000 sqm", label: "Area" },
        { icon: "park", value: "25,000 sqm", label: "Sports Village" },
        { icon: "park", value: "3,000 sqm", label: "Pocket Park" },
        { icon: "retail", value: "32,000 sqm", label: "Town Centre" }
      ]
    }
  }),
  seed("dubai-hills-estate", {
    overview: {
      heading: "DUBAI HILLS ESTATE",
      paragraphs: [
        "Dubai Hills Estate unfolds like a retreat, an escape into a blissful sanctuary. A place to unwind, recharge, and reconnect with nature. Framed by rolling greens and panoramic vistas, it is where wellness flows, movement thrives, and connections come to life. Spanning over 11 million square meters, Dubai Hills Estate seamlessly weaves contemporary living into a lush, green tapestry. Often hailed as ‘The Green Heart of Dubai’ it offers a balance — moments from the city, yet worlds away in spirit."
      ],
      restHeading: "Explore the Vibrant Lifestyle of Dubai Hills Estate",
      restParagraphs: [
        "Discover the offerings of Dubai Hills Estate, a sprawling 2,700-acre multi-purpose development that includes an impressive championship golf course, expansive parks and open spaces, and the iconic Dubai Hills Park. Enjoy the shopping experience at Dubai Hills Mall and ensure access to quality education with nearby schools. Navigate the community seamlessly with a dedicated bicycle route, and experience world-class golfing at the renowned Dubai Hills Golf Club. These amenities collectively shape the unique and vibrant lifestyle within Dubai Hills Estate."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Discover the incredible offerings that shape the vibrant lifestyle within Dubai Hills Estate.",
      stats: [
        { icon: "building", value: "2,700-acre", label: "Multi-purpose Development" },
        { icon: "area", value: "18-Hole", label: "Championship Golf Course" },
        { icon: "park", value: "1,450,000 sqm", label: "Parks & Open Spaces" },
        { icon: "park", value: "180,000 sqm", label: "Dubai Hills Park" },
        { icon: "retail", value: "282,000 sqm", label: "Dubai Hills Mall" },
        { icon: "school", value: "3", label: "Schools" },
        { icon: "area", value: "54 km", label: "Bicycle Route" }
      ]
    }
  }),
  seed("the-oasis-by-emaar", {
    overview: {
      heading: "THE OASIS BY EMAAR",
      paragraphs: [
        "Discover unparalleled luxury living at The Oasis by Emaar, an exclusive sanctuary nestled amidst lush greenery and tranquil waterways. Our meticulously crafted residences, including mansions and villas, are designed by world-renowned architects and adorned with interiors by acclaimed designers.",
        "Enjoy seamless indoor-outdoor living, complemented by an abundance of world-class amenities. The Oasis by Emaar is more than just refined waterfront living; it's the epitome of elegance and comfort, with every moment a celebration of life. Enjoy the luxury of personalised services that cater to your every need, making every day an occasion for indulgence and relaxation. Unwind in style amidst meticulously crafted interiors that inspire and invigorate. Your journey to unparalleled sophistication begins now at Emaar's The Oasis. Welcome home to a lifestyle of effortless luxury and timeless charm."
      ],
      restHeading: "Amenities",
      restParagraphs: [
        "The Oasis by Emaar presents a wealth of amenities designed to enrich residents' lives and foster a vibrant community atmosphere. Within this expansive master community, residents have access to beautifully landscaped parks, jogging tracks, and local mosques, offering serene spaces for relaxation. With convenient access to pristine beaches and a central location, leisure and exploration are effortlessly woven into daily life."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Explore the vast scale and features of The Oasis by Emaar.",
      stats: [
        { icon: "area", value: "100M sq ft", label: "Total Land Area" },
        { icon: "building", value: "2,600", label: "Villas" },
        { icon: "park", value: "25%", label: "Open Spaces + Amenities" },
        { icon: "area", value: "4", label: "Nearby International Golf Courses" }
      ]
    }
  }),
  seed("dubai-creek-harbour", {
    overview: {
      heading: "DUBAI CREEK HARBOUR",
      paragraphs: [
        "Experience a unique waterfront enclave where contemporary luxury, serene nature and innovation come together. It features iconic amenities like the Dubai Creek Marina, a haven for yachting enthusiasts, and close proximity to the Ras Al Khor Wildlife Sanctuary, renowned for its rich biodiversity, including flamingos. The sanctuary’s tranquil lagoons offer a perfect setting for nature walks and birdwatching.",
        "Dubai Creek Harbour offers easy access to landmarks such as Downtown Dubai and Dubai International Airport. With picturesque promenades, world-class dining, schools, healthcare facilities, and the upcoming Dubai Metro expansion, the community is poised as a prime destination for both living and investment.",
        "Dubai Creek Harbour offers a range of apartments, penthouses and luxury hotels, including Vida Creek Harbour, Address Harbour Point, and Palace Residences, featuring breathtaking views of the Creek and the Dubai skyline. Residents and visitors can enjoy world-class dining, unwind at rooftop pools, and have convenient access to a variety of retail outlets."
      ],
      restHeading: "The Future of Waterfront Living",
      restParagraphs: [
        "Dubai Creek Harbour offers a tranquil lifestyle with wellness facilities, lively retail hubs, and stunning views of the marina and Dubai skyline. Enjoy outdoor dining, yoga at sunrise, or a leisurely stroll along the promenade. Capture vibrant creek views or take a boat tour to see iconic landmarks from the water. For an exceptional stay, check in at one of the luxury hotels or branded residences.",
        "Relax by the infinity pool with Burj Khalifa views or explore the area on a bike. Whether you’re seeking a dream home or a solid investment, Dubai Creek Harbour offers exceptional value. Select from one to three bedroom apartments, spacious family homes, or luxury penthouses, each with modern design. Discover a new way of living at Dubai Creek Harbour."
      ],
    },
    amenities: {
      heading: "At a Glance",
      intro: "Discover the scale and vision behind the future of waterfront living at Dubai Creek Harbour.",
      stats: [
        { icon: "building", value: "711,399 sqm", label: "Serviced Apartments" },
        { icon: "area", value: "7.4M sqm", label: "Residential Space" },
        { icon: "park", value: "500,000 sqm", label: "Parks & Open Spaces" }
      ]
    }
  }),
  seed("rashid-yachts-and-marina", {
    overview: {
      heading: "RASHID YACHTS & MARINA",
      paragraphs: [
        "Welcome to Rashid Yachts & Marina — a visionary haven along the Arabian Gulf, where daring design meets azure horizons. Sweeping marina vistas unfold alongside a promenade lined with curated retail and dining destinations, whilst yachts gently berth at your doorstep, moments become a celebration of opulent waterfront living. Every residence is brought to life with intricate detail and striking expression, offering a marina living experience beyond the ordinary. Rashid Yachts & Marina redefines Dubai’s seafront coastal legacy — a realm of fearless ambition and infinite discovery."
      ],
      restHeading: "Amenities",
      restParagraphs: [
        "Rashid Yachts & Marina offers top-notch amenities and an exceptional waterfront location, making it an excellent real estate investment for waterfront property. With cutting-edge docking facilities, a luxurious clubhouse, and proximity to the city's attractions, it's perfect for those who appreciate the finer things and seek both leisure and convenience along the waterfront. Whether you're a sailing enthusiast or a shrewd investor, Rashid Yachts & Marina promises an unmatched waterfront lifestyle experience in the heart of the coastal city."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Discover the spectacular waterfront offerings at Rashid Yachts & Marina.",
      stats: [
        { icon: "area", value: "100 m", label: "Long Yachts" },
        { icon: "pool", value: "400", label: "Wet Berths" },
        { icon: "park", value: "6", label: "Interconnected District Parks" },
        { icon: "building", value: "Iconic views", label: "Of Burj Khalifa and the Arabian Sea" },
        { icon: "building", value: "Floating Yacht Club", label: "Hospitality on the Water" },
        { icon: "building", value: "Queen Elizabeth 2", label: "Monumental Landmark & Floating Hotel" }
      ]
    }
  }),
  seed("arabian-ranches-iii", {
    overview: {
      heading: "ARABIAN RANCHES III",
      paragraphs: [
        "Wake up to a new day and embrace the moment. Let your creativity flow as you step into Arabian Ranches III, designed with contemporary elegance and infused with Arabian flair. This vibrant community offers an exceptional lifestyle surrounded by lush landscapes and world-class amenities, creating a family-friendly haven where joy, relaxation, and adventure await.",
        "Discover spacious villas crafted with premium finishes and refined craftsmanship, redefining luxury in the heart of Dubai. Every detail—from serene parks to exclusive leisure facilities—is designed to enhance your everyday living and invite you to embrace the art of fine living."
      ],
      restHeading: "Amenities",
      restParagraphs: [
        "Embrace the tranquillity of expansive green spaces and beautifully landscaped parks, providing a serene backdrop for leisurely strolls or outdoor gatherings with family and friends. Immerse yourself in the leisurely ambiance of the community's world-class amenities, including swimming pools, tennis courts, and fitness centres, designed to cater to your recreational needs and wellness pursuits.",
        "Additionally, there are dedicated play areas for children, ensuring they have a safe and engaging environment to thrive in. With an emphasis on wellness and leisure, Arabian Ranches Community presents an unparalleled living experience and lifestyle where every need is met, and every moment is cherished. Moreover, near Arabian Ranches III, you can enjoy the Arabian Ranches Golf Club, boasting a championship-standard 18-hole golf course."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Discover the spectacular amenities that make Arabian Ranches III the perfect family haven.",
      stats: [
        { icon: "building", value: "4000+", label: "Villas Across the Community" },
        { icon: "park", value: "Gated Community", label: "With 5 Entry Points" },
        { icon: "area", value: "Arabian Ranches I & II", label: "Steps Away" },
        { icon: "pool", value: "Sports & Leisure Amenities", label: "Throughout the Community" }
      ]
    }
  }),
  seed("emaar-south", {
    overview: {
      heading: "EMAAR SOUTH",
      paragraphs: [
        "Emaar South is a dynamic residential community in Dubai South. Surrounded by picturesque green landscapes and top-tier amenities, this community offers a perfect blend of comfort and calm. Whether perfecting your swing on the championship golf course or unwinding in a beautifully crafted home, Emaar South presents a balance of nature, leisure, and refined golf living. The community features exquisite, sleek apartments with contemporary interiors and breathtaking views, spacious townhouses with open-plan living and private gardens, and elegant villas designed for the ultimate in luxury and comfort.",
        "Ideally located near Al Maktoum International Airport and in close proximity to the iconic Expo City, Emaar South offers unparalleled connectivity to major transport hubs, ensuring seamless convenience and accessibility for its residents and visitors. As Dubai South’s infrastructure continues to evolve, Emaar South is quickly emerging as one of the city’s most promising investment hotspots. This dynamic community is not only a prime location for modern living; it positions you in the heart of a thriving growth corridor."
      ],
      restHeading: "Amenities",
      restParagraphs: [
        "Emaar South boasts world-class amenities designed to enrich residents’ lifestyles. Golf enthusiasts can retreat to the 18-hole championship course, set amidst vibrant greenery, offering a serene escape and exciting challenge. Families can enjoy spacious parks and play areas, while fitness enthusiasts can access fully equipped gyms and health clubs, promoting wellness and an active lifestyle.",
        "Residents have access to retail outlets, recreational spaces, healthcare facilities including the Saudi German Clinic in Dubai South Village, and schools such as Greenfield International School. For shopping and dining, a diverse range of local and international outlets caters to every taste, fulfilling every need, from essentials to indulgences, within this vibrant community."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Discover the spectacular amenities crafted to enrich the Emaar South lifestyle.",
      stats: [
        { icon: "building", value: "15,360", label: "Apartment Units" },
        { icon: "retail", value: "53,000 sqm", label: "Retail and Dining Space" },
        { icon: "area", value: "18-Hole", label: "Championship Golf Course" },
        { icon: "park", value: "25", label: "Neighbourhood Parks" },
        { icon: "building", value: "22,700", label: "Residential Units" }
      ]
    }
  }),
  seed("grand-polo-club-and-resort", {
    overview: {
      heading: "GRAND POLO CLUB & RESORT",
      paragraphs: [
        "A manifestation of luxurious living, blending the heritage of captivating equestrian experiences with seamless landscapes exuding modernity. An architectural style which is a fusion of form and function, entirely unparalleled. A lifestyle that offers an opportunity to be one with nature, every day.",
        "Grand Polo Club & Resort is a masterplan which is built to strike fine balance between lifestyle principles of leisure, nature, connectivity, wellness and recreation. Whilst having the equestrian prestige at its heart, the green spaces loop-around and branch-out across the masterplan, connecting the residences thereby fostering a sense of community and belonging.",
        "Welcome to Grand Polo Club & Resort by Emaar."
      ],
      restHeading: "Equestrian Opulence, Beyond Imagination",
      restParagraphs: [
        "A regal home where the finest of inspired architecture, panoramas and experiences come together. A lifestyle dipped in ultimate opulence where every day unfolds like a poetic narrative. A community which offers a sanctuary of solitude while keeping connections and conversations, still close to home and heart. This is a new chapter of luxury living made for the ones who appreciate the intricate beauty of details."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Discover the grand scale and equestrian facilities of Grand Polo Club & Resort.",
      stats: [
        { icon: "area", value: "5.54M SqM", label: "Masterplan Total Area" },
        { icon: "park", value: "1.59M SqM", label: "Open Space" },
        { icon: "area", value: "340,000 SqM", label: "Polo Field & Stables Expanse" },
        { icon: "building", value: "5,600 SqM", label: "Clubhouse GFA" },
        { icon: "retail", value: "1.56M SqM", label: "Mix Use GFA" },
        { icon: "building", value: "22", label: "Residential Clusters" },
        { icon: "building", value: "5,599", label: "Residences" },
        { icon: "area", value: "24,524", label: "Estimated Resident Population" }
      ]
    }
  }),
  seed("emaar-beachfront", {
    overview: {
      heading: "EMAAR BEACHFRONT",
      paragraphs: [
        "EMAAR Beachfront offers a luxurious, private island lifestyle at Dubai Harbour. This exclusive, gated community provides unparalleled access to the city’s premier attractions, including world-class malls, gourmet restaurants, and prestigious yacht clubs. It's an off-plan development by Emaar Properties, strategically located near Sheikh Zayed Road, ensuring a seamless commute to all parts of Dubai. Where the sea greets you every morning, and pristine white sand welcomes you home—on an island with a statement address in Dubai. Awaken your senses with every breath, as you redefine your premium lifestyle, overlooking the majestic Arabian Gulf at Emaar Beachfront.",
        "Emaar Beachfront brings world-class shopping and entertainment right to your doorstep, part of this meticulously planned off-plan development by Emaar Properties. Imagine waking up to the soothing sounds of the sea every morning and coming home to pristine white sand beaches. This masterfully planned development caters to every aspect of premium living, with proximity to prestigious yacht clubs, gourmet restaurants, and the best shopping malls Dubai has to offer, including those in Palm Jumeirah and Dubai Marina. Whether it's a relaxing day at the beach or a vibrant night out, Emaar Beachfront promises a lifestyle of unparalleled luxury and convenience in one of Dubai's most sought-after neighbourhoods."
      ],
      restHeading: "Amenities",
      restParagraphs: [
        "Experience unparalleled amenities at Emaar Beachfront, where beachfront living meets luxury. With 1.5 km of pristine shoreline, 27 residential towers offering 10,000 units, and a 13,000 sqm retail mall, every aspect of your lifestyle is catered to within this exclusive community. Enjoy the convenience of having Dubai Marina at your doorstep, breathtaking sea views from apartments designed to maximize the beauty of the Arabian Gulf and easy access to Sheikh Zayed Road for seamless commuting. Emaar Beachfront redefines luxury living with its unmatched amenities and prime location, offering a lifestyle of sophistication and comfort by the sea.",
        "Near the Emaar Beachfront community, residents and visitors can explore several attractions and leisure destinations including Dubai Marina, a bustling waterfront district with dining, shopping, and entertainment options where you can stroll along the marina promenade, dine at waterfront restaurants, or take boat tours. The Beach at JBR offers a vibrant outdoor experience with restaurants, cafés, shops, and year-round events, while Dubai Marina Mall, situated in the heart of Dubai Marina, provides diverse retail outlets, dining options, a cinema complex, and indoor entertainment facilities. These attractions, combined with the beachfront lifestyle and amenities within the Emaar Beachfront community itself, contribute to a vibrant and dynamic living experience for residents and visitors alike in Dubai Harbour."
      ]
    },
    amenities: {
      heading: "At a Glance",
      intro: "Key facts and highlights from the Emaar Beachfront masterplan at Dubai Harbour.",
      stats: [
        { icon: "pool", value: "1.5 km", label: "Beachfront" },
        { icon: "building", value: "27", label: "Residential Towers" },
        { icon: "building", value: "10,000", label: "Residential Units" },
        { icon: "retail", value: "13,000 sqm", label: "Retail Mall" },
        { icon: "area", value: "At Your Doorstep", label: "Dubai Marina" },
        { icon: "pool", value: "Apartments Overlooking the Sea", label: "Sea Views" },
        { icon: "plane", value: "To Sheikh Zayed Road", label: "Easy Access" }
      ]
    }
  }),
];

export function getCommunityDetail(slug: string): CommunityDetail | undefined {
  return communityDetails.find((c) => c.slug === slug);
}
