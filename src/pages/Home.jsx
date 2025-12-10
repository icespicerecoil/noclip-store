// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { products } from "../data/products";
import Countdown from "../components/Countdown";

// smooth scroll helper for the buttons
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// pick which products show in the "Core noclip products" row
const featuredProducts =
  products.filter((p) => p.featured) || products.slice(0, 3);

/**
 * Get a persistent 3-day discount end time.
 * - First visit: sets now + 72h and stores it in localStorage
 * - Refresh / reopening: reuses the same timestamp, so it DOESN'T reset
 */
function getDiscountEnd() {
  try {
    const key = "noclip_discount_end";
    const stored = window.localStorage.getItem(key);

    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!Number.isNaN(parsed)) return parsed;
    }

    // no stored value → create one for 72h from now
    const end = Date.now() + 72 * 60 * 60 * 1000;
    window.localStorage.setItem(key, String(end));
    return end;
  } catch {
    // if localStorage is blocked, just fall back to 72h (will reset on reload, but that's rare)
    return Date.now() + 72 * 60 * 60 * 1000;
  }
}

const DISCOUNT_END = typeof window !== "undefined"
  ? getDiscountEnd()
  : Date.now() + 72 * 60 * 60 * 1000;

const Home = () => {
  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-content">
            {/* tiny brand line */}
            <p className="hero-eyebrow">
              <span className="hero-brand">
                noclip<span className="hero-brand-mark">°</span>
              </span>{" "}
              · rust cheats · spoofer · accounts
            </p>

            <h1 className="hero-title">
              Turn every Rust server <span>into your own highlight reel.</span>
            </h1>

            <p className="hero-subtitle">
              noclip° is your full Rust stack: safer external, configurable
              internal, HWID spoofer and NFA accounts. Built for people who
              actually play the game and still want to go stupid every wipe.
            </p>

            {/* main hero buttons */}
            <div className="hero-actions">
              <button
                className="btn-primary"
                onClick={() => scrollToId("home-products")}
              >
                🔥 Browse cheats
              </button>
              <button
                className="btn-ghost"
                onClick={() => scrollToId("home-status")}
              >
                📡 Live status
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollToId("home-support")}
              >
                💬 Get support
              </button>
            </div>

            {/* ======= 50% DISCOUNT BANNER WITH TIMER ======= */}
            <div
              style={{
                marginTop: "24px",
                maxWidth: "540px",
                padding: "14px 22px",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
                background:
                  "linear-gradient(90deg, rgba(255,77,210,0.95), rgba(110,0,255,0.95))",
                boxShadow: "0 0 26px rgba(110,0,255,0.75)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#ffffff",
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  🎉 50% discount on all products
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    opacity: 0.92,
                    lineHeight: 1.3,
                  }}
                >
                  Limited time sale – when the timer hits 00:00:00, prices go
                  back to normal.
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "4px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.9,
                  }}
                >
                  Ends in
                </span>
                <Countdown targetTime={DISCOUNT_END} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== STRIP UNDER HERO =============== */}
      <section className="strip">
        <div className="strip-inner">
          <div className="strip-item">
            <span className="strip-label">Game focus</span>
            <span className="strip-value">Rust · EAC</span>
          </div>
          <div className="strip-item">
            <span className="strip-label">Playstyle</span>
            <span className="strip-value">Legit · closet · semi-rage</span>
          </div>
          <div className="strip-item">
            <span className="strip-label">Platform</span>
            <span className="strip-value">Windows 10 / 11</span>
          </div>
          <div className="strip-item">
            <span className="strip-label">Support lane</span>
            <span className="strip-value">
              Tickets · screen-share · configs
            </span>
          </div>
        </div>
      </section>

      {/* =============== FEATURED PRODUCTS PREVIEW =============== */}
      <section id="home-products" className="section section-dark">
        <div className="section-inner">
          {/* title + full products button */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <h2 className="section-title">
                Core <span className="section-title-highlight">noclip°</span>{" "}
                products
              </h2>
              <p className="section-sub" style={{ maxWidth: "600px" }}>
                Your main toolkit: safer external, configurable internal and a
                HWID layer that keeps your machine cleaner while you go crazy in
                Rust.
              </p>
            </div>

            {/* use hash so it matches HashRouter on Vercel */}
            <a
              href="#/products"
              className="btn-small"
              style={{
                background: "linear-gradient(90deg,#ff4dd2,#6e00ff)",
                padding: "10px 18px",
                borderRadius: "999px",
                boxShadow: "0 0 14px rgba(255,0,200,0.55)",
                whiteSpace: "nowrap",
                fontWeight: 600,
              }}
            >
              View full product menu →
            </a>
          </div>

          <div className="home-products-grid">
            {featuredProducts.map((product) => (
              <article key={product.id} className="home-product-card">
                <div className="home-product-img-wrap">
                  {product.image && (
                    <img src={product.image} alt={product.name} />
                  )}
                </div>

                <h3>{product.name}</h3>

                <p>{product.subtitle}</p>

                <div className="home-product-meta">
                  {(product.tags || []).slice(0, 3).map((tag, idx) => (
                    <span
                      key={tag}
                      className={
                        "badge " +
                        (idx === 0
                          ? "badge-green"
                          : idx === 1
                          ? "badge-blue"
                          : "badge-purple")
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="home-product-footer">
                  <span className="home-product-price">
                    {product.comingSoon ? (
                      <>
                        <strong>Coming soon</strong>
                        {product.priceFrom && (
                          <>
                            {" · from "}
                            <strong>{product.priceFrom}</strong>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        from <strong>$3.5</strong>
                      </>
                    )}
                  </span>

                  <Link to={`/product/${product.id}`} className="btn-small">
                    View details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATUS PREVIEW */}
      <section id="home-status" className="section section-dark">
        <div className="section-inner">
          <h2 className="section-title">Live status preview</h2>
          <p className="section-sub">
            Full history sits on the Status page. This is just a quick peek.
          </p>

          <div className="status-grid">
            <div className="status-card">
              <span className="status-dot status-ok" />
              <div>
                <h3>NoClip External</h3>
                <p>Undetected — fully operational.</p>
              </div>
            </div>

            <div className="status-card">
              <span className="status-dot status-warn" />
              <div>
                <h3>NoClip Pro (Internal)</h3>
                <p>Updating — offsets patching.</p>
              </div>
            </div>

            <div className="status-card">
              <span className="status-dot status-ok" />
              <div>
                <h3>NoClip HWID Spoofer</h3>
                <p>Online — safe to use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT PREVIEW */}
      <section id="home-support" className="section section-gradient">
        <div className="section-inner support-layout">
          <div>
            <h2 className="section-title">Need help setting up noclip°?</h2>
            <p className="section-sub">
              Tickets get answered by people who actually play Rust.
            </p>

            <ul className="support-list">
              <li>• Step-by-step install help</li>
              <li>• Configs for legit / closet players</li>
              <li>• HWID & ban advice</li>
              <li>• Simple refund rules when needed</li>
            </ul>
          </div>

          <div className="support-form">
            <p className="support-form-title">Open a support ticket (preview)</p>
            <p className="support-form-sub">Sends you to Discord.</p>

            <input placeholder="Discord tag (e.g. noclip#0001)" />
            <input placeholder="Email (optional)" />
            <textarea
              rows="4"
              placeholder="Tell us what you need help with..."
            />

            <a
              href="https://discord.gg/EuFPeMAqc3"
              target="_blank"
              rel="noreferrer"
              className="btn-primary support-btn"
            >
              Go to Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
