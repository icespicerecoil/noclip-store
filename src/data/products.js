// src/data/products.js

export const products = [
  {
    id: "noclip-external",
    name: "NoClip External",
    subtitle: "Low-footprint external with ESP and QoL features.",
    tag: "External",
    status: "Undetected",
    basePriceLabel: "From $6.99",
    image: "/noclip-external.png", // put this image in /public or change the path
    plans: [
      { id: "day", label: "Day key", price: "$6.99" },
      { id: "3day", label: "3 Day key", price: "$14.99" },
      { id: "week", label: "Week key", price: "$24.99" },
      { id: "month", label: "Month key", price: "$49.99" },
      { id: "life", label: "Lifetime key", price: "$119.99" },
    ],
    features: {
      Aim: [
        "Humanized smooth aimbot with FOV circle",
        "Bone selection (head / chest / body)",
        "Visibility checks & target priority",
        "Tap-style trigger aim option",
      ],
      Visual: [
        "Player ESP with health, distance and skeleton",
        "Team / friend filters",
        "Loot, stash and crate ESP with filters",
        "Configurable colors per group",
      ],
      Miscellaneous: [
        "Recoil and spread control sliders",
        "Crosshair, hitmarkers and hit logs",
        "Config save / load system",
        "Stream-proof overlay mode",
      ],
    },
  },
  {
    id: "noclip-pro",
    name: "NoClip Pro (Internal)",
    subtitle: "Full internal with advanced config system.",
    tag: "Internal",
    status: "Undetected",
    basePriceLabel: "From $8.99",
    image: "/noclip-pro.png",
    plans: [
      { id: "day", label: "Day key", price: "$8.99" },
      { id: "3day", label: "3 Day key", price: "$19.99" },
      { id: "week", label: "Week key", price: "$34.99" },
      { id: "month", label: "Month key", price: "$59.99" },
      { id: "life", label: "Lifetime key", price: "$149.99" },
    ],
    features: {
      Aim: [
        "Prediction-based aimbot with smoothing curves",
        "RCS with per-weapon profiles",
        "Silent-style shot correction",
      ],
      Visual: [
        "Clean internal ESP with outlines",
        "Chams / glow with visibility checks",
        "Spectator list and radar",
      ],
      Miscellaneous: [
        "In-game menu with configs",
        "Keybind system for modes",
        "Cloud config support (coming soon)",
      ],
    },
  },
  {
    id: "noclip-spoofer",
    name: "NoClip HWID Spoofer",
    subtitle: "Cleaner + spoof layer to protect fresh accounts.",
    tag: "Utility",
    status: "Safe use",
    basePriceLabel: "From $4.99",
    image: "/noclip-spoofer.png",
    plans: [
      { id: "day", label: "Day key", price: "$4.99" },
      { id: "week", label: "Week key", price: "$14.99" },
      { id: "month", label: "Month key", price: "$24.99" },
      { id: "life", label: "Lifetime key", price: "$49.99" },
    ],
    features: {
      General: [
        "Disk, NIC and SMBIOS spoof layer",
        "One-click cleaner for common anti-cheats",
        "Preset + advanced modes",
      ],
      Safety: [
        "Session-only spoof option",
        "Restore point creation",
        "Detailed usage guide",
      ],
    },
  },
  {
    id: "noclip-accounts",
    name: "NoClip NFA Rust Accounts",
    subtitle: "Fresh NFA accounts ready to bind and play.",
    tag: "Accounts",
    status: "Stock rotating",
    basePriceLabel: "From $4.99",
    image: "/noclip-accounts.png",
    plans: [
      { id: "single", label: "Single account", price: "$4.99" },
      { id: "3pack", label: "3x Pack", price: "$12.99" },
      { id: "5pack", label: "5x Pack", price: "$18.99" },
    ],
    features: {
      Accounts: [
        "Verified fresh NFA accounts",
        "Region-mixed stock",
        "Replacement policy on dead on arrival",
      ],
      Notes: [
        "Perfect for testing configs",
        "Great for closet / backup identities",
      ],
    },
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
