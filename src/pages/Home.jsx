// src/pages/Home.jsx
import { Link } from "react-router-dom";

// smooth scroll helper for the buttons
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

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

            {/* pill-style vouch row */}
            <div className="hero-pills">
              <div className="hero-pill">
                <span className="hero-pill-icon">⚡</span>
                <div className="hero-pill-text">
                  <span className="hero-pill-main">Instant delivery</span>
                  <span className="hero-pill-sub">
                    Keys & panel access right after payment.
                  </span>
                </div>
              </div>

              <div className="hero-pill">
                <span className="hero-pill-icon">🛡</span>
                <div className="hero-pill-text">
                  <span className="hero-pill-main">Safety-focused stack</span>
                  <span className="hero-pill-sub">
                    External, internal & HWID tools tuned for Rust.
                  </span>
                </div>
              </div>

              <div className="hero-pill">
                <span className="hero-pill-icon">💬</span>
                <div className="hero-pill-text">
                  <span className="hero-pill-main">1:1 Discord support</span>
                  <span className="hero-pill-sub">
                    Real humans, screen-share & config help.
                  </span>
                </div>
              </div>

              <div className="hero-pill hero-pill-highlight">
                <span className="hero-pill-icon">★</span>
                <div className="hero-pill-text">
                  <span className="hero-pill-main">
                    22,000+ sessions injected
                  </span>
                  <span className="hero-pill-sub">
                    10,000+ players boosted · 5,000+ tickets solved.
                  </span>
                </div>
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
            {/* NoClip External */}
            <article className="home-product-card">
              <div className="home-product-img-wrap">
                <img src="/noclip-external.png" alt="NoClip External" />
              </div>
              <h3>NoClip External</h3>
              <p>
                Low-footprint external cheat with ESP, aim assist, radar and QoL
                features.
              </p>
              <div className="home-product-meta">
                <span className="badge badge-green">External</span>
                <span className="badge badge-blue">Low risk</span>
              </div>

              <div className="home-product-footer">
                <span className="home-product-price">
                  from <strong>$7.99</strong> / month
                </span>

                <a href="#/products" className="btn-small">
                  View details
                </a>
              </div>
            </article>

            {/* NoClip Pro */}
            <article className="home-product-card">
              <div className="home-product-img-wrap">
                <img src="/noclip-pro.png" alt="NoClip Pro" />
              </div>
              <h3>NoClip Pro (Internal)</h3>
              <p>
                Smooth internal with ESP layers, aimbot, recoil control and misc
                tools.
              </p>
              <div className="home-product-meta">
                <span className="badge badge-purple">Internal</span>
                <span className="badge badge-blue">Config system</span>
              </div>

              <div className="home-product-footer">
                <span className="home-product-price">
                  from <strong>$9.99</strong> / month
                </span>

                <a href="#/products" className="btn-small">
                  View details
                </a>
              </div>
            </article>

            {/* Spoofer */}
            <article className="home-product-card">
              <div className="home-product-img-wrap">
                <img src="/noclip-spoofer.png" alt="NoClip HWID Spoofer" />
              </div>
              <h3>NoClip HWID Spoofer</h3>
              <p>
                Spoofing layer to protect accounts and reset identifiers when
                needed.
              </p>

              <div className="home-product-meta">
                <span className="badge badge-green">HWID</span>
                <span className="badge badge-purple">Cleaner + tools</span>
              </div>

              <div className="home-product-footer">
                <span className="home-product-price">
                  from <strong>$19.99</strong> lifetime
                </span>

                <a href="#/products" className="btn-small">
                  View details
                </a>
              </div>
            </article>
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
