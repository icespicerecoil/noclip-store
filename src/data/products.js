// src/data/products.js

export const products = [
  // =====================================
  // RUST EXTERNAL (COMING SOON)
  // =====================================
  {
    id: "rust-external",
    name: "Rust External",
    ribbon: "Coming Soon",
    subtitle:
      "Low-footprint Rust external with ESP, aim assist and quality-of-life features.",
    longSubtitle:
      "Rust external cheat designed for safe closet play. Smooth ESP, legit aim assist with configurable smoothing, QoL features and a low, undetected footprint. Currently not available for purchase.",
    image: "/noclip-pro.png",
    tags: ["External", "Rust", "Coming Soon"],
    priceFrom: "Soon",
    comingSoon: true,
    plans: [
      {
        id: "rust-ext-soon",
        label: "Coming soon",
        price: "TBA",
        checkoutUrl: "#"
      }
    ]
  },

  // =====================================
  // FORTNITE EXTERNAL (LIVE)
  // =====================================
  {
    id: "fortnite-external",
    name: "Fortnite External",
    ribbon: "Best for legit closet",
    subtitle:
      "Fortnite external cheat designed for smooth ESP, clean aim assist, and undetected closet play.",
    longSubtitle:
      "Fortnite external cheat designed for safe closet use. Smooth ESP with clean visuals, legit aim assist, low CPU usage and a fully undetected footprint.",
    image: "/noclip-fortnite.png",
    tags: ["External", "Fortnite", "Undetected", "Legit play"],
    priceFrom: "$3.5",
    comingSoon: false,
    plans: [
      {
        id: "fn-ext-1d",
        label: "1 Day",
        price: "$3.5",
        checkoutUrl:
          "https://no-clip.mysellauth.com/checkout/7c5bca75fb727-0000008388525"
      }
    ]
  },

  // =====================================
  // NOCLIP NFA (LIVE)
  // =====================================
  {
    id: "noclip-nfa",
    name: "NoClip NFA Account",
    ribbon: "Fresh & Ready",
    subtitle: "Fresh Rust NFA accounts with instant delivery.",
    longSubtitle:
      "Fresh Rust NFA accounts delivered instantly after payment. Perfect if you need a clean Rust account for legit or closet play.",
    image: "/noclip-r6.png", // using this art for now
    tags: ["Accounts", "Rust", "NFA"],
    priceFrom: "$3",
    comingSoon: false,
    plans: [
      {
        id: "nfa-basic",
        label: "Single NFA Account",
        price: "$3",
        checkoutUrl:
          "https://no-clip.mysellauth.com/checkout/9b6070f8a4930-0000008388541"
      }
    ]
  },

  // =====================================
  // RUST INTERNAL (COMING SOON)
  // =====================================
  {
    id: "rust-internal",
    name: "Rust Internal",
    ribbon: "Coming Soon",
    subtitle: "High-performance Rust internal cheat. Currently in development.",
    longSubtitle:
      "Rust internal cheat with advanced rage & legit features. Still in development and not available for purchase yet.",
    image: "/noclip-pro.png",
    tags: ["Internal", "Rust", "Coming Soon"],
    priceFrom: "Soon",
    comingSoon: true,
    plans: [
      {
        id: "rust-int-soon",
        label: "Coming soon",
        price: "TBA",
        checkoutUrl: "#"
      }
    ]
  },

  // =====================================
  // R6 EXTERNAL (COMING SOON)
  // =====================================
  {
    id: "r6-external",
    name: "Rainbow Six External",
    ribbon: "Coming Soon",
    subtitle:
      "Rainbow Six Siege external cheat with ESP and legit aim assist. In development.",
    longSubtitle:
      "Rainbow Six external cheat with ESP, aim assist and QoL features. Currently being developed and not yet available for purchase.",
    image: "/noclip-r6.png",
    tags: ["External", "R6", "Coming Soon"],
    priceFrom: "Soon",
    comingSoon: true,
    plans: [
      {
        id: "r6-ext-soon",
        label: "Coming soon",
        price: "TBA",
        checkoutUrl: "#"
      }
    ]
  },

  // =====================================
  // HWID SPOOFER (COMING SOON)
  // =====================================
  {
    id: "hwid-spoofer",
    name: "HWID Spoofer",
    ribbon: "Coming Soon",
    subtitle: "Protect your HWID from bans and traces. In development.",
    longSubtitle:
      "NoClip HWID spoofer designed to clean traces, mask identifiers, and protect your setup. Currently unavailable and coming soon.",
    image: "/noclip-spoofer.png",
    tags: ["Spoofer", "HWID", "Coming Soon"],
    priceFrom: "Soon",
    comingSoon: true,
    plans: [
      {
        id: "spoofer-soon",
        label: "Coming soon",
        price: "TBA",
        checkoutUrl: "#"
      }
    ]
  }
];

// helper
export function getProductById(id) {
  return products.find((p) => p.id === id);
}
