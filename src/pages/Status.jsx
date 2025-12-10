// src/pages/Status.jsx
import React from "react";
import "./Status.css";

export default function Status() {
  return (
    <main className="status-page">
      <section className="status-hero">
        <div className="status-hero-left">
          <p className="status-kicker">noclip° live status</p>
          <h1 className="status-title">
            Check detection <span>before you load.</span>
          </h1>
          <p className="status-subtitle">
            Always verify status before you inject. This page gives you a quick,
            human-readable summary of what&apos;s safe, what&apos;s updating and
            what needs extra care.
          </p>
        </div>

        <div className="status-hero-right">
          <div className="status-note-card">
            <h2>Simple rules</h2>
            <ul>
              <li>Do not use products marked as &quot;Updating&quot;.</li>
              <li>Keep main accounts only on undetected builds.</li>
              <li>
                When in doubt, open a ticket in{" "}
                <a
                  href="https://discord.gg/EuFPeMAqc3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="status-grid-section">
        <div className="status-grid">
          {/* RUST EXTERNAL */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-ok" />
              <div>
                <h2>NoClip Rust External</h2>
                <p>Primary legit / closet Rust external.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-ok">Undetected</span>
              <span className="status-pill">Windows 10 / 11</span>
            </div>
            <p className="status-desc">
              Safe with legit configs. Don&apos;t rage on mains you care about.
            </p>
          </article>

          {/* FORTNITE EXTERNAL */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-ok" />
              <div>
                <h2>NoClip Fortnite External</h2>
                <p>Fortnite external with smooth ESP and legit aim.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-ok">Undetected</span>
              <span className="status-pill">Windows 10 / 11</span>
            </div>
            <p className="status-desc">
              Use low / legit settings for safest results on mains.
            </p>
          </article>

          {/* R6 EXTERNAL */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-ok" />
              <div>
                <h2>NoClip Rainbow Six External</h2>
                <p>R6 external with ESP and legit aim assist.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-ok">Undetected</span>
              <span className="status-pill">Windows 10 / 11</span>
            </div>
            <p className="status-desc">
              Undetected right now. Go harder only on alts and test accounts.
            </p>
          </article>

          {/* INTERNAL */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-warn" />
              <div>
                <h2>NoClip Pro (Internal)</h2>
                <p>Advanced internal with deeper control.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-warn">Updating</span>
              <span className="status-pill">Offsets / security pass</span>
            </div>
            <p className="status-desc">
              Under maintenance. Do not use on any main account until it&apos;s
              marked &quot;Undetected&quot; again.
            </p>
          </article>

          {/* SPOOFER */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-warn" />
              <div>
                <h2>NoClip HWID Spoofer</h2>
                <p>HWID protection &amp; cleanup layer.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-warn">Updating</span>
              <span className="status-pill">Kernel changes / testing</span>
            </div>
            <p className="status-desc">
              Spoofer is being updated. Hold off until it comes back as
              undetected.
            </p>
          </article>

          {/* NFA ACCOUNTS */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-ok" />
              <div>
                <h2>NoClip NFA Rust Accounts</h2>
                <p>Pre-checked Rust NFA accounts.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-ok">In stock</span>
              <span className="status-pill">Replacement on arrival</span>
            </div>
            <p className="status-desc">
              Rotated frequently. Use for testing new builds and higher risk
              play.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
