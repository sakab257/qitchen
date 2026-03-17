import { type NavLink, type FeatureCardData, type MenuCategoryData, type AwardData, type AvisData } from "./types";

export const navLinks: NavLink[] = [
  { label: "Menu", href: "/menu" },
  { label: "à propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const mobileNavLinks: NavLink[] = [
  { label: "Menu", href: "/menu" },
  { label: "à propos", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Réservation", href: "/reservation" },
];

export const featureCards: FeatureCardData[] = [
  {
    title: "Menu",
    href: "/menu",
    image: "/images/card-menu.webp",
  },
  {
    title: "Reservation",
    href: "/reservation",
    image: "/images/card-reservation.webp",
  },
  {
    title: "Notre Restaurant",
    href: "/about",
    image: "/images/card-restaurant.webp",
  },
];

export const menuCategories: MenuCategoryData[] = [
  {
    id: "maki",
    label: "Maki",
    items: [
      {
        name: "Spicy Tuna Maki",
        description: "Un mélange savoureux de thon épicé, concombre et avocat, roulé harmonieusement dans du nori et du riz assaisonné.",
        price: "5€",
        image: "/images/menu/maki-spicy-tuna.webp",
      },
      {
        name: "Mango Maki",
        description: "Crevettes tempura, concombre et cream cheese enveloppant un cœur d'avocat frais, offrant un contraste de textures satisfaisant.",
        price: "5€",
        image: "/images/menu/maki-mango.webp",
        dietary: "vegetarian",
      },
      {
        name: "Salmon Maki",
        description: "Champignons shiitake, avocat et radis daikon mariné nichés dans un rouleau de riz assaisonné, enrobé de graines de sésame.",
        price: "5€",
        image: "/images/menu/maki-salmon.webp",
      },
      {
        name: "Tuna Maki",
        description: "Un assortiment coloré de carottes julienne, poivrons et concombre, délicatement enveloppé dans un rouleau de nori.",
        price: "5€",
        image: "/images/menu/maki-tuna.webp",
      },
    ],
  },
  {
    id: "uramaki",
    label: "Uramaki",
    items: [
      {
        name: "Volcano Delight",
        description: "Salade de crabe crémeuse, avocat et concombre roulés à l'intérieur, garnis de thon épicé et arrosés de sauce sriracha.",
        price: "12€",
        image: "/images/menu/uramaki-volcano.webp",
      },
      {
        name: "Rainbow Fusion",
        description: "Un mélange coloré de thon frais, saumon, sériole et avocat, enveloppant un cœur de concombre et bâtonnet de crabe.",
        price: "12€",
        image: "/images/menu/uramaki-rainbow.webp",
      },
      {
        name: "Dragon Elegance",
        description: "Anguille grillée et avocat nichés dans le rouleau, drapés de tranches d'avocat mûr évoquant des écailles de dragon.",
        price: "12€",
        image: "/images/menu/uramaki-dragon.webp",
      },
      {
        name: "Sunset Serenity",
        description: "Crevettes tempura, concombre et mayo épicée enveloppés dans du papier de soja, couronnés de tranches de mangue crémeuse.",
        price: "12€",
        image: "/images/menu/uramaki-sunset.webp",
      },
      {
        name: "Mystic Garden",
        description: "Champignons shiitake, asperges et concombre mêlés à des éclats de tempura croustillants, recouverts de graines de sésame.",
        price: "12€",
        image: "/images/menu/uramaki-mystic.webp",
        dietary: "vegetarian",
      },
      {
        name: "Ocean Breeze",
        description: "Un assortiment de crevettes fraîches, bâtonnet de crabe et avocat, rehaussé d'une touche de tobiko infusé au yuzu.",
        price: "12€",
        image: "/images/menu/uramaki-ocean.webp",
      },
      {
        name: "Tokyo Blossom",
        description: "Un délicat papier de soja rose enveloppe un mélange de thon, bâtonnet de crabe et concombre, orné de pétales de fleurs comestibles.",
        price: "12€",
        image: "/images/menu/uramaki-tokyo.webp",
      },
    ],
  },
  {
    id: "special-rolls",
    label: "Rolls Spéciaux",
    items: [
      {
        name: "Sunrise Bliss",
        description: "Une combinaison délicate de saumon frais, cream cheese et asperges, roulée dans du tobiko orangé aux saveurs d'aurore.",
        price: "16€",
        image: "/images/menu/special-sunrise.webp",
        dietary: "vegetarian",
      },
      {
        name: "Mango Tango",
        description: "Crevettes tempura, concombre et avocat accompagnés de tranches de mangue sucrée, arrosés d'une sauce mangue acidulée.",
        price: "16€",
        image: "/images/menu/special-mango.webp",
      },
      {
        name: "Truffle Indulgence",
        description: "De somptueuses tranches de truffe noire ornent un rouleau de bœuf wagyu, concombre et micropousses, dans une symphonie umami.",
        price: "16€",
        image: "/images/menu/special-truffle.webp",
        dietary: "vegetarian",
      },
      {
        name: "Pacific Firecracker",
        description: "Salade de crabe épicée, crevettes tempura et piments jalapeño dans un ensemble ardent, relevé d'un aïoli au piment.",
        price: "16€",
        image: "/images/menu/special-pacific.webp",
        dietary: "vegetarian",
      },
      {
        name: "Eternal Eel",
        description: "Un mélange envoûtant d'anguille tempura, foie gras et concombre, élégamment disposés avec huile de truffe et feuille d'or.",
        price: "16€",
        image: "/images/menu/special-eternal.webp",
      },
    ],
  },
];

export const avis: AvisData[] = [
  {
    name: "Marie L.",
    text: "Une expérience inoubliable. Les sushis sont d'une fraîcheur incroyable et le service est impeccable.",
    rating: 5,
  },
  {
    name: "Thomas D.",
    text: "Le meilleur restaurant japonais de la ville. L'ambiance est raffinée et les plats sont de véritables œuvres d'art.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    text: "Cadre magnifique, saveurs authentiques. On sent la passion du chef dans chaque bouchée. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Lucas R.",
    text: "Un vrai voyage culinaire au Japon. Chaque plat est préparé avec une précision remarquable. On y retourne sans hésiter.",
    rating: 5,
  },
  {
    name: "Camille B.",
    text: "L'endroit parfait pour une soirée spéciale. Le dragon roll est une merveille absolue.",
    rating: 4,
  },
  {
    name: "Julien P.",
    text: "Service attentionné et plats d'exception. Le chef sait sublimer chaque ingrédient avec finesse.",
    rating: 5,
  },
  {
    name: "Emma V.",
    text: "Ambiance intime et élégante. Les rolls spéciaux valent vraiment le détour, une explosion de saveurs.",
    rating: 5,
  },
  {
    name: "Antoine G.",
    text: "Probablement les meilleurs makis que j'ai goûtés. Produits ultra frais et présentation soignée.",
    rating: 4,
  },
];

export const heroImages = {
  homeVideo: "/images/hero-home-video.mp4",
  menu: "/images/hero-menu.webp",
  about: "/images/about/about-hero.webp",
  reservation: "/images/hero-reservation.webp",
  contact: "/images/hero-contact.webp",
  logo: "/images/logo-qitchen.webp",
};

export const aboutImages = {
  slider1_1: "/images/about/about-slider1-1.webp",
  slider1_2: "/images/about/about-slider1-2.webp",
  slider1_3: "/images/about/about-slider1-3.webp",
  slider2_1: "/images/about/about-slider2-1.webp",
  slider2_2: "/images/about/about-slider2-2.webp",
  slider2_3: "/images/about/about-slider2-3.webp",
  story: "/images/about/about-hero.webp",
};

export const contactInfo = {
  address: ["45 Avenue des Champs-Élysées", "75008 Paris"],
  phone: "+33 1 23 45 67 89",
  email: "info@qitchen.com",
};

export const openingHours = [
  { day: "Lun", hours: "16:00 - 22:30" },
  { day: "Mar", hours: "16:00 - 22:30" },
  { day: "Mer", hours: "16:00 - 22:30" },
  { day: "Jeu", hours: "16:00 - 22:30" },
  { day: "Ven", hours: "16:00 - 22:30" },
  { day: "Sam & Dim", hours: "16:00 - 22:30" },
];

export const contactImages = [
  "/images/contact/contact1.webp",
  "/images/contact/contact2.webp",
  "/images/contact/contact3.webp",
  "/images/contact/contact4.webp",
];
