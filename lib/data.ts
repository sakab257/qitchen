import { type NavLink, type FeatureCardData, type MenuCategoryData, type AwardData } from "./types";

export const navLinks: NavLink[] = [
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
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
    title: "Our Restaurant",
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
        description: "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
        price: "$5",
        image: "/images/menu/maki-spicy-tuna.webp",
      },
      {
        name: "Mango Maki",
        description: "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
        price: "$5",
        image: "/images/menu/maki-mango.webp",
        dietary: "vegetarian",
      },
      {
        name: "Salmon Maki",
        description: "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
        price: "$5",
        image: "/images/menu/maki-salmon.webp",
      },
      {
        name: "Tuna Maki",
        description: "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped roll.",
        price: "$5",
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
        description: "Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.",
        price: "$12",
        image: "/images/menu/uramaki-volcano.webp",
      },
      {
        name: "Rainbow Fusion",
        description: "A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.",
        price: "$12",
        image: "/images/menu/uramaki-rainbow.webp",
      },
      {
        name: "Dragon Elegance",
        description: "Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.",
        price: "$12",
        image: "/images/menu/uramaki-dragon.webp",
      },
      {
        name: "Sunset Serenity",
        description: "Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.",
        price: "$12",
        image: "/images/menu/uramaki-sunset.webp",
      },
      {
        name: "Mystic Garden",
        description: "Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.",
        price: "$12",
        image: "/images/menu/uramaki-mystic.webp",
        dietary: "vegetarian",
      },
      {
        name: "Ocean Breeze",
        description: "A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.",
        price: "$12",
        image: "/images/menu/uramaki-ocean.webp",
      },
      {
        name: "Tokyo Blossom",
        description: "Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.",
        price: "$12",
        image: "/images/menu/uramaki-tokyo.webp",
      },
    ],
  },
  {
    id: "special-rolls",
    label: "Special Rolls",
    items: [
      {
        name: "Sunrise Bliss",
        description: "A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
        price: "$16",
        image: "/images/menu/special-sunrise.webp",
        dietary: "vegetarian",
      },
      {
        name: "Mango Tango",
        description: "Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
        price: "$16",
        image: "/images/menu/special-mango.webp",
      },
      {
        name: "Truffle Indulgence",
        description: "Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
        price: "$16",
        image: "/images/menu/special-truffle.webp",
        dietary: "vegetarian",
      },
      {
        name: "Pacific Firecracker",
        description: "Spicy crab salad, tempura shrimp, and jalapeno peppers combine in a fiery ensemble, accented with a chili-infused aioli.",
        price: "$16",
        image: "/images/menu/special-pacific.webp",
        dietary: "vegetarian",
      },
      {
        name: "Eternal Eel",
        description: "An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
        price: "$16",
        image: "/images/menu/special-eternal.webp",
      },
    ],
  },
];

export const awards: AwardData[] = [
  { title: "Trip Advisor", subtitle: "Best Sushi" },
  { title: "Michelin Guide", subtitle: "Quality Food" },
  { title: "Start Dining", subtitle: "Cool Vibe" },
];

export const heroImages = {
  homeVideo: "/images/hero-home-video.mp4",
  menu: "/images/hero-menu.webp",
  about: "/images/about/about-hero.webp",
  reservation: "/images/hero-reservation.webp",
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
