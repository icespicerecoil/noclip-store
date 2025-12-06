// src/data/products.js

export const products = [
  {
    id: "external",
    name: "NoClip External",
    ribbon: "Best for legit closet",
    subtitle: "Low-footprint external with ESP, aim assist and quality-of-life features.",
    longSubtitle:
      "Low footprint external with ESP, aim assist and solid QoL features. Built for legit closet players who still care about surviving the next wave of bans.",
    image: "/noclip-external.png",
    tags: ["External", "Undetected", "Legit play"],
    // ✅ prices updated
    priceFrom: "$3.5",
    plans: [
      {
        id: "external-1d",
        label: "1 Day",
        price: "$3.5",
        checkoutUrl: "https://your-sellauth-link-for-1d"
      },
      {
        id: "external-7d",
        label: "7 Days",
        price: "$12.5",
        checkoutUrl: "https://your-sellauth-link-for-7d"
      },
      {
        id: "external-3d",
        label: "3 Days",
        price: "$7.5",
        checkoutUrl: "https://your-sellauth-link-for-7d"
      },
      {
        id: "external-30d",
        label: "30 Days",
        price: "$30",
        checkoutUrl: "https://your-sellauth-link-for-30d"
      }
      // 🔥 Lifetime removed
    ],
    features: [
      "ESP with configurable filters and colors",
      "Smooth aim assist tuned for legit play",
      "Stream-safe capture (no overlay in recordings)",
      "Panel-based control with hotkeys",
      "Full support & regular updates via Discord"
    ]
  },

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
    comingSoon: true, // ✅ flag so we can show COMING SOON
    plans: [
      {
        id: "internal-1d",
        label: "1 Day",
        price: "$9.99",
        checkoutUrl: "https://your-sellauth-link"
      },
      {
        id: "internal-7d",
        label: "7 Days",
        price: "$24.99",
        checkoutUrl: "https://your-sellauth-link"
      },
      {
        id: "internal-30d",
        label: "30 Days",
        price: "$44.99",
        checkoutUrl: "https://your-sellauth-link"
      },
      {
        id: "internal-life",
        label: "Lifetime",
        price: "$99.99",
        checkoutUrl: "https://your-sellauth-link"
      }
    ],
    features: [
      "Layered ESP with visibility checks",
      "Configurable aimbot with humanized smoothing",
      "Recoil control & weapon profiles",
      "In-game menu with configs & hotkeys",
      "Secure loader & frequent updates"
    ]
  },

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
    comingSoon: true, // ✅ show COMING SOON
    plans: [
      {
        id: "hwid-7d",
        label: "7 Days",
        price: "$8.99",
        checkoutUrl: "https://your-sellauth-link"
      },
      {
        id: "hwid-30d",
        label: "30 Days",
        price: "$19.99",
        checkoutUrl: "https://your-sellauth-link"
      },
      {
        id: "hwid-life",
        label: "Lifetime",
        price: "$39.99",
        checkoutUrl: "https://your-sellauth-link"
      }
    ],
    features: [
      "Full cleaner to wipe common traces",
      "Spoofs main hardware identifiers",
      "Fast pre-match routine",
      "Safe to re-run between wipes",
      "Support for common anti-cheats"
    ]
  },

  // 🔥 NFA CARD – single $3 plan
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
  }
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
