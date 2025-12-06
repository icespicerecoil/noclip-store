// src/data/products.js

export const products = [
  // ----------------------------------------------------
  // RUST EXTERNAL (renamed from NoClip External)
  // ----------------------------------------------------
  {
    id: "external",
    name: "Rust External",
    ribbon: "Best for legit closet",
    subtitle:
      "Low-footprint external with ESP, aim assist and quality-of-life features.",
    longSubtitle:
      "Low footprint external with ESP, aim assist and solid QoL features. Built for legit closet players who still care about surviving the next wave of bans.",
    image: "/noclip-external.png",
    tags: ["External", "Undetected", "Legit play"],
    priceFrom: "$3.5",
    plans: [
      {
        id: "external-1d",
        label: "1 Day",
        price: "$3.5",
        checkoutUrl: "https://your-sellauth-link-for-1d"
      },
      {
        id: "external-3d",
        label: "3 Days",
        price: "$7.5",
        checkoutUrl: "https://your-sellauth-link-for-3d"
      },
      {
        id: "external-week",
        label: "Week",
        price: "$12.5",
        checkoutUrl: "https://your-sellauth-link-for-week"
      },
      {
        id: "external-month",
        label: "Month",
        price: "$30",
        checkoutUrl: "https://your-sellauth-link-for-month"
      }
    ],
    features: [
      "ESP with configurable filters and colors",
      "Smooth aim assist tuned for legit play",
      "Stream-safe capture (no overlay in recordings)",
      "Panel-based control with hotkeys",
      "Full support & regular updates via Discord"
    ]
  },

  // ----------------------------------------------------
  // INTERNAL (unchanged)
  // ----------------------------------------------------
  {
    id: "internal",
    name: "NoClip Pro (Internal)",
    ribbon: "Full control internal",
    subtitle:
      "Smooth internal with ESP layers, aimbot, recoil control and deep config system.",
    longSubtitle:
      "Internal stack with layered ESP, configurable aimbot and recoil control. Built for players who want full control without looking like a full rage script.",
    image: "/noclip-pro.png",
    tags: ["Internal", "Full control"],
    priceFrom: "$9.99",
    comingSoon: true,
    plans: [
      { id: "internal-1d", label: "1 Day", price: "$9.99", checkoutUrl: "https://your-sellauth-link" },
      { id: "internal-7d", label: "7 Days", price: "$24.99", checkoutUrl: "https://your-sellauth-link" },
      { id: "internal-30d", label: "30 Days", price: "$44.99", checkoutUrl: "https://your-sellauth-link" },
      { id: "internal-life", label: "Lifetime", price: "$99.99", checkoutUrl: "https://your-sellauth-link" }
    ],
    features: [
      "Layered ESP with visibility checks",
      "Configurable aimbot with humanized smoothing",
      "Recoil control & weapon profiles",
      "In-game menu with configs & hotkeys",
      "Secure loader & frequent updates"
    ]
  },

  // ----------------------------------------------------
  // HWID SPOOFER (unchanged)
  // ----------------------------------------------------
  {
    id: "hwid",
    name: "NoClip HWID Spoofer",
    ribbon: "Safety layer",
    subtitle:
      "Cleaner + spoof layer to protect fresh accounts and reset identifiers.",
    longSubtitle:
      "Cleaner plus hardware ID spoof layer designed to protect fresh accounts, reduce flagging and reset identifiers after bans.",
    image: "/noclip-spoofer.png",
    tags: ["Safety", "HWID spoof"],
    priceFrom: "$8.99",
    comingSoon: true,
    plans: [
      { id: "hwid-7d", label: "7 Days", price: "$8.99", checkoutUrl: "https://your-sellauth-link" },
      { id: "hwid-30d", label: "30 Days", price: "$19.99", checkoutUrl: "https://your-sellauth-link" },
      { id: "hwid-life", label: "Lifetime", price: "$39.99", checkoutUrl: "https://your-sellauth-link" }
    ],
    features: [
      "Full cleaner to wipe common traces",
      "Spoofs main hardware identifiers",
      "Fast pre-match routine",
      "Safe to re-run between wipes",
      "Support for common anti-cheats"
    ]
  },

  // ----------------------------------------------------
  // RUST NFA ACCOUNTS (unchanged)
  // ----------------------------------------------------
  {
    id: "nfa",
    name: "Rust NFA Accounts",
    ribbon: "Rust NFA accounts",
    subtitle:
      "Curated Rust NFA accounts for closet players who want a clean base to build stats on.",
    longSubtitle:
      "Hand-picked Rust NFA accounts with clean history and natural profiles. Perfect for closet grinders who don’t want to start from ground zero every wipe.",
    image: "/noclip-accounts.png",
    tags: ["Accounts", "NFA", "Safer start"],
    priceFrom: "$3",
    plans: [
      {
        id: "nfa-single",
        label: "NFA Account",
        price: "$3",
        checkoutUrl: "https://your-sellauth-link"
      }
    ],
    features: [
      "Hand-picked accounts with clean behavior",
      "No chargeback / scammy history",
      "Email access details included",
      "Replacement for dead-on-arrival accounts",
      "Support via Discord for account issues"
    ]
  },

  // ----------------------------------------------------
  // ⭐ NEW PRODUCT — FORTNITE EXTERNAL
  // ----------------------------------------------------
  {
    id: "fn-external",
    name: "Fortnite External",
    ribbon: "Best for legit closet",
    subtitle: "Low-footprint Fortnite ESP + aim assist for safe competitive play.",
    longSubtitle:
      "Fortnite external cheat designed for safe closet use. Smooth ESP, clean aim assist, and fully undetected footprint.",
    image: "/noclip-fortnite.png",
    tags: ["External", "Undetected", "Legit play"],
    priceFrom: "$3.5",
    plans: [
      { id: "fn-1d", label: "1 Day", price: "$3.5", checkoutUrl: "https://your-sellauth-link" },
      { id: "fn-3d", label: "3 Days", price: "$7.5", checkoutUrl: "https://your-sellauth-link" },
      { id: "fn-week", label: "Week", price: "$12.5", checkoutUrl: "https://your-sellauth-link" },
      { id: "fn-month", label: "Month", price: "$30", checkoutUrl: "https://your-sellauth-link" }
    ],
    features: [
      "ESP with clean player outlines",
      "Smooth aim assist with legit smoothing",
      "Stream-safe capture (undetected overlay)",
      "Low CPU usage for high FPS",
      "24/7 support via Discord"
    ]
  },

  // ----------------------------------------------------
  // ⭐ NEW PRODUCT — RAINBOW SIX EXTERNAL
  // ----------------------------------------------------
  {
    id: "r6-external",
    name: "Rainbow Six External",
    ribbon: "Best for legit closet",
    subtitle: "Clean ESP + aim assist optimized for R6 without performance hit.",
    longSubtitle:
      "Rainbow Six external ESP + aim assist with clean visuals and low performance impact. Optimized for legit closet gameplay.",
    image: "/noclip-r6.png",
    tags: ["External", "Undetected", "Legit play"],
    priceFrom: "$3.5",
    plans: [
      { id: "r6-1d", label: "1 Day", price: "$3.5", checkoutUrl: "https://your-sellauth-link" },
      { id: "r6-3d", label: "3 Days", price: "$7.5", checkoutUrl: "https://your-sellauth-link" },
      { id: "r6-week", label: "Week", price: "$12.5", checkoutUrl: "https://your-sellauth-link" },
      { id: "r6-month", label: "Month", price: "$30", checkoutUrl: "https://your-sellauth-link" }
    ],
    features: [
      "ESP with visibility checks",
      "Legit smooth aim assist",
      "Stream-safe overlay support",
      "Optimized for high FPS",
      "Active Discord support and updates"
    ]
  }
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
