// src/data/products.js
export const products = [
  // =====================================
  // RUST EXTERNAL (LIVE)
  // =====================================
  {
    id: "rust-external",
    name: "Rust External",
    ribbon: "Best for legit closet",
    subtitle:
      "Low-footprint Rust external with ESP, aim assist and quality-of-life features.",
    longSubtitle:
      "Rust external cheat designed for safe closet play. Smooth ESP, legit aim assist, QoL features and a low undetected footprint.",
    image: "/noclip-external.png",
    tags: ["External", "Rust", "Undetected", "Legit play"],
    priceFrom: "$3.5",
    comingSoon: false,
    featured: true, // 👈 show on home card row
    plans: [
      {
        id: "rust-ext-1d",
        label: "1 Day",
        price: "$3.5",
        checkoutUrl:
          "https://no-clip.mysellauth.com/checkout/84bf53a9a5f0f-0000008464984" // NEW RUST LINK
      },
      {
        id: "rust-ext-3d",
        label: "3 Days",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "rust-ext-week",
        label: "Week",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "rust-ext-month",
        label: "Month",
        price: "$30",
        checkoutUrl:
          "https://no-clip.mysellauth.com/checkout/3eb725d85ca8f-0000008473829"
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
      "Fortnite external cheat with smooth ESP, legit aim assist, low CPU usage and undetected performance.",
    image: "/noclip-fortnite.png",
    tags: ["External", "Fortnite", "Undetected", "Legit play"],
    priceFrom: "$3.5",
    comingSoon: false,
    featured: true, // 👈 now shows as middle home card
    plans: [
      {
        id: "fn-1d",
        label: "1 Day",
        price: "$3.5",
        checkoutUrl:
          "https://no-clip.mysellauth.com/checkout/a75ec611b00d1-0000008464981" // NEW FORTNITE LINK
      },
      {
        id: "fn-3d",
        label: "3 Days",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "fn-week",
        label: "Week",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "fn-month",
        label: "Month",
        price: "Coming Soon",
        checkoutUrl: ""
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
    longSubtitle: "Fresh Rust NFA accounts delivered instantly after payment.",
    image: "/noclip-accounts.png",
    tags: ["Accounts", "Rust", "NFA"],
    priceFrom: "$3",
    comingSoon: false,
    // not featured on the home row
    plans: [
      {
        id: "nfa-basic",
        label: "Single NFA Account",
        price: "$3",
        checkoutUrl:
          "https://no-clip.mysellauth.com/checkout/a75ec611b00d1-0000008464981" // NEW NFA LINK (same as Fortnite as you sent)
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
    subtitle: "High-performance Rust internal cheat. In development.",
    longSubtitle:
      "Advanced legit/rage Rust internal cheat currently in development.",
    image: "/noclip-pro.png",
    tags: ["Internal", "Rust", "Coming Soon"],
    priceFrom: "Coming Soon",
    comingSoon: true,
    // featured: false => no longer on home row
    plans: [
      {
        id: "rust-int-1d",
        label: "1 Day",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "rust-int-3d",
        label: "3 Days",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "rust-int-week",
        label: "Week",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "rust-int-month",
        label: "Month",
        price: "Coming Soon",
        checkoutUrl: ""
      }
    ]
  },

  // =====================================
  // R6 EXTERNAL (COMING SOON BUT SHOW $3.5)
  // =====================================
  {
    id: "r6-external",
    name: "Rainbow Six External",
    ribbon: "Coming Soon",
    subtitle:
      "Rainbow Six Siege external cheat with ESP and legit aim assist.",
    longSubtitle:
      "R6 external cheat with ESP, aim assist, visibility checks and QoL features.",
    image: "/noclip-r6.png",
    tags: ["External", "R6", "Coming Soon"],
    priceFrom: "$3.5", // 👈 show price on card
    comingSoon: true, // 👈 still marked coming soon
    featured: true, // 👈 shows as the 3rd home card
    plans: [
      {
        id: "r6-1d",
        label: "1 Day",
        price: "$3.5",
        checkoutUrl: ""
      },
      {
        id: "r6-3d",
        label: "3 Days",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "r6-week",
        label: "Week",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "r6-month",
        label: "Month",
        price: "Coming Soon",
        checkoutUrl: ""
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
    subtitle: "Protect your hardware ID from bans & traces.",
    longSubtitle: "Spoofer designed to clean traces and mask identifiers.",
    image: "/noclip-spoofer.png",
    tags: ["Spoofer", "HWID", "Coming Soon"],
    priceFrom: "Coming Soon",
    comingSoon: true,
    // featured: false => no longer on home row
    plans: [
      {
        id: "spoofer-1d",
        label: "1 Day",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "spoofer-week",
        label: "Week",
        price: "Coming Soon",
        checkoutUrl: ""
      },
      {
        id: "spoofer-month",
        label: "Month",
        price: "Coming Soon",
        checkoutUrl: ""
      }
    ]
  }
];

// helper
export function getProductById(id) {
  return products.find((p) => p.id === id);
}
