// src/pages/ProductDetail.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";
import { products } from "../data/products";

// Plans per product name
const PLANS_BY_NAME = {
  "NoClip External": [
    { id: "day", label: "Day key", price: "$6.99" },
    { id: "3day", label: "3 Day key", price: "$14.99" },
    { id: "week", label: "Week key", price: "$24.99" },
    { id: "month", label: "Month key", price: "$49.99" },
    { id: "life", label: "Lifetime key", price: "$119.99" },
  ],
  "NoClip Pro (Internal)": [
    { id: "day", label: "Day key", price: "$8.99" },
    { id: "3day", label: "3 Day key", price: "$19.99" },
    { id: "week", label: "Week key", price: "$34.99" },
    { id: "month", label: "Month key", price: "$59.99" },
    { id: "life", label: "Lifetime key", price: "$149.99" },
  ],
  "NoClip HWID Spoofer": [
    { id: "day", label: "Day key", price: "$4.99" },
    { id: "week", label: "Week key", price: "$14.99" },
    { id: "month", label: "Month key", price: "$24.99" },
    { id: "life", label: "Lifetime key", price: "$49.99" },
  ],
  "NoClip NFA Rust Accounts": [
    { id: "single", label: "Single account", price: "$4.99" },
    { id: "3pack", label: "3x Pack", price: "$12.99" },
    { id: "5pack", label: "5x Pack", price: "$18.99" },
  ],
};

// Features per product name
const FEATURES_BY_NAME = {
  "NoClip External": {
    Aim: [
      "Humanized smooth aimbot with FOV circle",
      "Bone selection (head / chest / body)",
      "Visibility checks & target priority",
      "Tap-style trigger aim option",
    ],
    Visual: [
      "Player ESP with health, distance and skeleton",
      "Team / friend filters",
      "Loot / stash / crate ESP with filters",
      "Configurable colors per group",
    ],
    Miscellaneous: [
      "Recoil / spread control sliders",
      "Crosshair, hitmarkers and hit logs",
      "Config save / load system",
      "Stream-proof overlay mode",
    ],
  },
  "NoClip Pro (Internal)": {
    Aim: [
      "Prediction-based aimbot with smoothing curves",
      "RCS with per-weapon profiles",
      "Silent-style shot correction",
    ],
    Visual: [
      "Internal ESP with outlines",
      "Chams / glow with visibility checks",
      "Spectator list and radar",
    ],
    Miscellaneous: [
      "In-game menu with configs",
      "Keybind system for modes",
      "Cloud config support (coming soon)",
    ],
  },
  "NoClip HWID Spoofer": {
    General: [
      "Disk / NIC / SMBIOS spoof layer",
      "One-click cleaner for common anti-cheats",
      "Preset + advanced modes",
    ],
    Safety: [
      "Session-only spoof option",
      "Restore point creation",
      "Detailed usage guide",
    ],
  },
  "NoClip NFA Rust Accounts": {
    Accounts: [
      "Verified fresh NFA accounts",
      "Region-mixed stock",
      "Replacement policy on arrival",
    ],
    Notes: [
      "Perfect for testing configs",
      "Great for closet / backup identities",
    ],
  },
};

// 🔗 Sellauth links per product + plan
// TODO: replace each REPLACE_ME_URL with the actual Sellauth link
const SELL_AUTH_LINKS = {
  "NoClip External": {
    day: "REPLACE_ME_EXTERNAL_DAY",
    "3day": "REPLACE_ME_EXTERNAL_3DAY",
    week: "REPLACE_ME_EXTERNAL_WEEK",
    month: "REPLACE_ME_EXTERNAL_MONTH",
    life: "REPLACE_ME_EXTERNAL_LIFE",
    default: "https://no-clip.mysellauth.com/",
  },
  "NoClip Pro (Internal)": {
    day: "REPLACE_ME_PRO_DAY",
    "3day": "REPLACE_ME_PRO_3DAY",
    week: "REPLACE_ME_PRO_WEEK",
    month: "REPLACE_ME_PRO_MONTH",
    life: "REPLACE_ME_PRO_LIFE",
    default: "https://no-clip.mysellauth.com/",
  },
  "NoClip HWID Spoofer": {
    day: "REPLACE_ME_SPOOFER_DAY",
    week: "REPLACE_ME_SPOOFER_WEEK",
    month: "REPLACE_ME_SPOOFER_MONTH",
    life: "REPLACE_ME_SPOOFER_LIFE",
    default: "https://no-clip.mysellauth.com/",
  },
  "NoClip NFA Rust Accounts": {
    single: "https://no-clip.mysellauth.com/product/noclip-nfa",
    "3pack": "REPLACE_ME_ACCOUNTS_3PACK",
    "5pack": "REPLACE_ME_ACCOUNTS_5PACK",
    default: "https://no-clip.mysellauth.com/",
  },
};

export default function ProductDetail() {
  const { id } = useParams();
  const index = Number(id);
  const product = products[index];

  if (!product) {
    return (
      <main className="section section-dark">
        <div className="section-inner">
          <p>Product not found.</p>
          <Link to="/products">← Back to products</Link>
        </div>
      </main>
    );
  }

  const plans = PLANS_BY_NAME[product.name] || [];
  const features = FEATURES_BY_NAME[product.name] || {};
  const [activePlanId, setActivePlanId] = useState(plans[0]?.id || null);
  const [openSection, setOpenSection] = useState(null);

  const activePlan =
    plans.find((plan) => plan.id === activePlanId) || plans[0] || null;

  const handleBuyNow = () => {
    const mapping = SELL_AUTH_LINKS[product.name] || {};
    const specificUrl = mapping[activePlanId];
    const fallbackUrl = mapping.default || "https://no-clip.mysellauth.com/";

    const urlToOpen = specificUrl || fallbackUrl;

    window.open(urlToOpen, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="section section-dark product-detail-page">
      <div className="section-inner product-detail-layout">
        <section className="pd-left">
          <div className="pd-hero">
            <img src={product.image} alt={product.name} />
          </div>
          <h1 className="pd-title">{product.name}</h1>
          <p className="pd-sub">{product.subtitle}</p>
        </section>

        <section className="pd-right">
          <h2 className="pd-panel-title">Buy keys</h2>

          <div className="pd-variant-list">
            {plans.map((plan) => (
              <button
                key={plan.id}
                className={
                  "pd-variant-card" +
                  (activePlanId === plan.id ? " active" : "")
                }
                onClick={() => setActivePlanId(plan.id)}
              >
                <span>{plan.label}</span>
                <strong>{plan.price}</strong>
              </button>
            ))}
          </div>

          <div className="pd-summary">
            Selected:{" "}
            <strong>{activePlan ? activePlan.label : "Choose a key"}</strong>
          </div>

          <button className="pd-btn-buy" onClick={handleBuyNow}>
            Buy now
          </button>

          <div className="pd-section">
            <h3>Features</h3>
            {Object.entries(features).map(([group, items]) => (
              <div key={group} className="pd-accordion-item">
                <button
                  className="pd-accordion-header"
                  onClick={() =>
                    setOpenSection(openSection === group ? null : group)
                  }
                >
                  <span>{group}</span>
                  <span>{openSection === group ? "▴" : "▾"}</span>
                </button>
                {openSection === group && (
                  <ul className="pd-accordion-body">
                    {items.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="pd-section">
            <h3>System requirements</h3>
            <ul className="pd-accordion-body pd-reqs">
              <li>Windows 10 / 11 (64-bit)</li>
              <li>Secure Boot OFF</li>
              <li>TPM OFF recommended</li>
              <li>Virtualization ON</li>
              <li>Run loader as Administrator</li>
            </ul>
          </div>

          <Link to="/products" className="pd-back-link">
            ← Back to products
          </Link>
        </section>
      </div>
    </main>
  );
}
