// =============================================================================
// CAFE CONFIGURATION — Edit this file to update all business info site-wide.
// Replace all [PLACEHOLDER] values with real client information.
// =============================================================================

export const CAFE_CONFIG = {
  name: "Bean & Bloom",
  tagline: "Cafe",
  description: "Specialty coffee, fresh pastries and warm conversations — made with care in the heart of the city.",

  // ── Contact ────────────────────────────────────────────────────────────────
  phone: "[CAFE PHONE]",           // e.g. "+91 98765 43210"
  email: "[CAFE EMAIL]",           // e.g. "hello@beanandbloom.in"
  address: "[CAFE ADDRESS]",       // e.g. "12 MG Road, Koramangala, Bengaluru 560034"

  // ── WhatsApp — digits only, no + or spaces ─────────────────────────────────
  // e.g. "919876543210" for an Indian number +91 98765 43210
  whatsapp: "[CAFE WHATSAPP NUMBER]",

  // ── Social links — replace # with real profile URLs ────────────────────────
  instagram: "#",
  facebook:  "#",
  twitter:   "#",

  // ── Map — replace both values with real cafe location ──────────────────────
  // For the iframe embed src, generate from: maps.google.com > Share > Embed
  // Leave mapSrc as empty string "" to hide the iframe and show only the button.
  mapSrc: "",
  // googleMapsUrl — used for "Open in Google Maps" and "Get Directions" buttons
  // Format: https://maps.google.com/?q=YOUR+ADDRESS+HERE
  googleMapsUrl: "https://maps.google.com/",
};

// =============================================================================
// NAVIGATION
// =============================================================================
export const NAV_LINKS = [
  { label: "Home",    href: "#home" },
  { label: "About",   href: "#about" },
  { label: "Menu",    href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

// =============================================================================
// FEATURED COFFEES (Homepage spotlight — 3 items)
// =============================================================================
export const FEATURED_COFFEES = [
  {
    id: 1,
    name: "Signature Cappuccino",
    description: "Velvety steamed milk layered over our house-blend double shot, dusted with single-origin cocoa.",
    price: "180",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=700&q=80",
  },
  {
    id: 2,
    name: "Velvet Latte",
    description: "Silky oat milk meets our golden espresso blend — smooth, warm, and effortlessly elegant.",
    price: "220",
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=700&q=80",
  },
  {
    id: 3,
    name: "Cold Brew Reserve",
    description: "18-hour slow-steeped cold brew with a hint of vanilla, served over hand-chipped ice.",
    price: "240",
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=700&q=80",
  },
];

// =============================================================================
// MENU CATEGORIES
// All prices in Indian Rupees (INR). Do not add currency symbol here.
// The UI renders the Rs symbol automatically.
// =============================================================================
export const MENU_CATEGORIES = [
  {
    id: "coffee",
    label: "Coffee",
    items: [
      { name: "Espresso",            description: "Double shot - Single-origin beans - Rich and bold",          price: "120" },
      { name: "Flat White",          description: "Ristretto shot - Velvety steamed whole milk",                price: "160" },
      { name: "Signature Cappuccino",description: "House-blend double shot - Steamed milk - Cocoa dust",        price: "180" },
      { name: "Velvet Latte",        description: "Golden espresso blend - Silky oat milk",                     price: "220" },
      { name: "Cold Brew Reserve",   description: "18-hour slow-steeped - Hint of vanilla - Hand-chipped ice",  price: "240" },
      { name: "Pour Over",           description: "Single-origin - Freshly ground to order",                    price: "260" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      { name: "Avocado Toast",  description: "Sourdough - Smashed avocado - Poached egg - Chilli flakes", price: "380" },
      { name: "Bircher Muesli", description: "Overnight oats - Seasonal fruit - Honey - Toasted almonds",  price: "320" },
      { name: "Eggs Benedict",  description: "Brioche - Smoked salmon - Hollandaise - Dill",              price: "420" },
      { name: "Granola Bowl",   description: "House granola - Greek yoghurt - Fresh berries - Bee pollen", price: "280" },
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    items: [
      { name: "Almond Croissant", description: "Twice-baked - Frangipane filled - Toasted almonds",      price: "180" },
      { name: "Cardamom Knot",    description: "Scandinavian-style - Warm spiced sugar glaze",            price: "160" },
      { name: "Butter Croissant", description: "Classic French laminated dough - Baked fresh daily",     price: "140" },
      { name: "Banana Bread",     description: "Brown butter - Walnuts - Served warm with ricotta",       price: "200" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Affogato",            description: "Double espresso - House-made vanilla gelato",               price: "240" },
      { name: "Olive Oil Cake",      description: "Blood orange - Rosemary - Creme fraiche",                   price: "280" },
      { name: "Tarte au Citron",     description: "Silky lemon curd - Buttery shortcrust - Candied zest",      price: "260" },
      { name: "Dark Chocolate Pot",  description: "Single-origin 72% ganache - Sea salt - Hazelnut praline",   price: "300" },
    ],
  },
];

// =============================================================================
// WHY US FEATURES
// icon values must match lucide-react icon names
// =============================================================================
export const FEATURES = [
  {
    icon: "Coffee",
    title: "Freshly Roasted",
    description: "Our beans are roasted in small batches every week, sourced from sustainable family farms across Ethiopia, Colombia and Guatemala.",
  },
  {
    icon: "ChefHat",
    title: "Handcrafted Daily",
    description: "Every pastry, every dish, every cup is made from scratch by our team of passionate baristas and bakers — no shortcuts.",
  },
  {
    icon: "Leaf",
    title: "Locally Sourced",
    description: "We partner with local farms and artisan suppliers to bring you the freshest seasonal ingredients on every plate.",
  },
  {
    icon: "Flame",
    title: "Warm Atmosphere",
    description: "A space designed to slow you down — warm light, soft music and a team that genuinely cares about your visit.",
  },
];

// =============================================================================
// GALLERY
// =============================================================================
export const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80", alt: "Barista crafting latte art" },
  { id: 2, src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80",   alt: "Cozy cafe interior" },
  { id: 3, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80", alt: "Freshly brewed espresso" },
  { id: 4, src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=700&q=80",   alt: "Elegant pastry display" },
  { id: 5, src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=80", alt: "Coffee and book on table" },
  { id: 6, src: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=700&q=80", alt: "Fresh croissants from the oven" },
  { id: 7, src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=700&q=80", alt: "Latte art close-up" },
  { id: 8, src: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=700&q=80", alt: "Sunlit cafe window seat" },
];

// =============================================================================
// TESTIMONIALS
// Replace with real customer reviews once collected.
// =============================================================================
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Blogger",
    text: "Bean & Bloom is everything a great cafe should be. The cappuccino is genuinely the best I have had in the city, and the almond croissants are worth the trip alone. It has become my Sunday morning ritual.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Architect",
    text: "The space is impeccably designed — warm without feeling overdone. I come here to work and always leave more inspired. The pour over is exceptional and the staff remember my order every time.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
  },
  {
    id: 3,
    name: "Kavya Nair",
    role: "Writer",
    text: "Finding Bean & Bloom felt like discovering a secret. The cold brew is smooth and perfectly balanced, and the atmosphere makes two hours feel like twenty minutes. I bring all my friends here now.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80",
  },
];

// =============================================================================
// OPENING HOURS
// =============================================================================
export const OPENING_HOURS = [
  { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
  { day: "Saturday",        hours: "8:00 AM - 9:00 PM" },
  { day: "Sunday",          hours: "9:00 AM - 6:00 PM" },
];

// =============================================================================
// RESERVATION FORM OPTIONS
// =============================================================================
export const TIME_SLOTS = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM",
];

export const GUEST_OPTIONS = ["1 guest", "2 guests", "3 guests", "4 guests", "5 guests", "6+ guests"];
