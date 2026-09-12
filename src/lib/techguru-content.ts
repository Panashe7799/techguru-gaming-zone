import heroImage from "@/assets/techguru-hero.jpg";
import vrImage from "@/assets/techguru-vr.jpg";
import consoleImage from "@/assets/techguru-console.jpg";
import eventsImage from "@/assets/techguru-events.jpg";

export const business = {
  name: "TECHGURU",
  tagline: "LEVEL UP YOUR EXPERIENCE.",
  address: "14 Nzou Street, Marondera, Zimbabwe",
  addressLines: ["14 Nzou Street", "Marondera, Zimbabwe"],
  phones: ["+263 771 714 058", "+263 780 511 822"],
  whatsapp: "263771714058",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=14+Nzou+Street+Marondera+Zimbabwe",
};

export const navItems = [
  { label: "HOME", to: "/" },
  { label: "VR", to: "/vr" },
  { label: "PLAYSTATION", to: "/playstation" },
  { label: "GAMES", to: "/games" },
  { label: "PRICING", to: "/pricing" },
  { label: "EVENTS", to: "/events" },
  { label: "GALLERY", to: "/gallery" },
  { label: "CONTACT", to: "/contact" },
] as const;

export const images = { hero: heroImage, vr: vrImage, console: consoleImage, events: eventsImage };

export const pricing = [
  { name: "VR SESSION", price: "[PRICE]", detail: "Step into a completely different reality." },
  { name: "PLAYSTATION SESSION", price: "[PRICE]", detail: "Bring your crew and take on the challenge." },
  { name: "GROUP SESSION", price: "[PRICE]", detail: "Gaming time built for friends and groups." },
  { name: "EVENT PACKAGE", price: "[PRICE]", detail: "A memorable gaming experience for your event." },
];

export const games = [
  { id: 1, title: "Game title pending", platform: "PlayStation", genre: "Sports", description: "Game details will be added once availability is confirmed.", availability: "TO BE CONFIRMED", image: consoleImage },
  { id: 2, title: "Game title pending", platform: "VR", genre: "Adventure", description: "Experience details will be added once availability is confirmed.", availability: "TO BE CONFIRMED", image: vrImage },
  { id: 3, title: "Game title pending", platform: "PlayStation", genre: "Racing", description: "Game details will be added once availability is confirmed.", availability: "TO BE CONFIRMED", image: heroImage },
  { id: 4, title: "Game title pending", platform: "PlayStation", genre: "Fighting", description: "Game details will be added once availability is confirmed.", availability: "TO BE CONFIRMED", image: eventsImage },
  { id: 5, title: "Game title pending", platform: "VR", genre: "Multiplayer", description: "Experience details will be added once availability is confirmed.", availability: "TO BE CONFIRMED", image: vrImage },
] as const;

export const eventTypes = [
  "Birthday parties", "Friend groups", "Gaming competitions", "Tournaments",
  "School/college groups", "Corporate/team events", "Private gaming sessions",
];

export const gallery = [
  { image: heroImage, category: "VENUE", alt: "Illustrative placeholder of a premium gaming lounge" },
  { image: vrImage, category: "VR", alt: "Illustrative placeholder of a VR gaming experience" },
  { image: consoleImage, category: "PLAYSTATION", alt: "Illustrative placeholder of friends console gaming" },
  { image: eventsImage, category: "EVENTS", alt: "Illustrative placeholder of a group gaming event" },
  { image: consoleImage, category: "PLAYSTATION", alt: "Illustrative placeholder of multiplayer console gaming" },
  { image: vrImage, category: "VR", alt: "Illustrative placeholder of an immersive VR session" },
] as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  booking: "Hi Techguru, I'd like to book a gaming session.",
  vr: "Hi Techguru, I'd like to enquire about VR gaming.",
  playstation: "Hi Techguru, I'd like to enquire about PlayStation gaming.",
  event: "Hi Techguru, I'd like to enquire about an event.",
  general: "Hi Techguru, I'd like to know more about your gaming experiences.",
};