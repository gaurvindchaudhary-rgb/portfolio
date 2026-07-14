import { Project, SkillTile } from "./types";
import aboutWorkspaceImg from "./assets/images/about_workspace_1783936464803.jpg";
import uniqueBabkaHotelImg from "./assets/images/unique_babka_hotel_1783938909168.jpg";
import blancmangeResortImg from "./assets/images/blancmange_resort_1783938925731.jpg";
import travel25gAgencyImg from "./assets/images/travel_25g_agency_1783938941223.jpg";

export const ABOUT_IMAGE = aboutWorkspaceImg;

export const PROJECTS: Project[] = [
  {
    id: "taj-haveli-agra",
    title: "Taj Haveli Agra",
    category: "Web",
    description: "A gorgeous, booking-first bespoke website designed for Taj Haveli Agra. Features lightning-fast room previews and directly integrated booking flows to eliminate high OTA commission fees.",
    tags: ["React", "Vite", "Tailwind CSS", "Netlify"],
    image: uniqueBabkaHotelImg,
    index: "01",
    url: "https://unique-babka-f47047.netlify.app/",
    features: [
      "Custom sub-second page performance tuned with Vite",
      "Seamless mobile-first booking call-to-actions",
      "Fully responsive gallery lightboxes for high-definition room views",
      "Deployed and optimized on Netlify with automated build pipelines"
    ]
  },
  {
    id: "hotel-taj-agra",
    title: "Hotel Taj Agra",
    category: "Web",
    description: "A premium, high-performance resort website designed to elevate guest engagement for Hotel Taj Agra. It highlights exclusive amenities, room layouts, and features automated reservation queries.",
    tags: ["Frontend", "UX Design", "Responsive Layout", "Netlify"],
    image: blancmangeResortImg,
    index: "02",
    url: "https://effortless-blancmange-722266.netlify.app/",
    features: [
      "Fully responsive fluid grid systems adapting to mobile and desktop screens",
      "Custom micro-animations for room selections and interactions",
      "Polished high-contrast dark theme elements to convey elite luxury",
      "One-click direct customer support panel integration"
    ]
  },
  {
    id: "skyroute-travel",
    title: "Skyroute Travel",
    category: "Brand",
    description: "A full-scale digital tour booking portal designed for Skyroute Travel agency. Connects customers to customized travel plans and provides direct tour reservation flows.",
    tags: ["React", "Tour Booking", "WhatsApp API", "Netlify"],
    image: travel25gAgencyImg,
    index: "03",
    url: "https://travel25g.netlify.app/",
    features: [
      "Dynamic interactive search and filterable tour catalog",
      "Deep direct integration with WhatsApp API for fast reservation queries",
      "Sleek and optimized image loaders for fast loading of scenic travel assets",
      "Clean, modern travel branding with typography optimized for high conversions"
    ]
  }
];

export const SKILL_TILES: SkillTile[] = [
  { name: "AI-assisted web dev", tag: "React · Vite · Tailwind", className: "bg-[#2A1B0E] text-[#F5A623]" },
  { name: "Canva design", tag: "Brand kits & Visual layouts", className: "bg-[#0E2422] text-[#2FD9A6]" },
  { name: "Meta Ads Manager", tag: "Campaigns & Retargeting", className: "bg-[#161B2E] text-[#7C93FF]" },
  { name: "Photo editing", tag: "Photoshop & Asset retouching", className: "bg-[#241626] text-[#E37CD8]" },
  { name: "Client outreach", tag: "WhatsApp Business & Maps", className: "bg-[#1B2220] text-[#8FE0B0]" }
];

export const MARQUEE_ITEMS = [
  "REACT", "VITE", "CANVA", "META ADS MANAGER", "PHOTOSHOP", "VERCEL", "NETLIFY", "WHATSAPP BUSINESS",
  "HTML5", "CSS3", "TYPESCRIPT", "TAILWIND CSS", "GITHUB", "ADOBE CREATIVE SUITE"
];
