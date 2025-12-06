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
              <li>Keep main accounts on undetected builds only.</li>
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
          {/* External */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-ok" />
              <div>
                <h2>NoClip External</h2>
                <p>Primary legit / closet external cheat.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-ok">Undetected</span>
              <span className="status-pill">Windows 10 / 11</span>
            </div>
            <p className="status-desc">
              Safe to use with legit configs. Avoid rage-style plays on accounts
              you care about.
            </p>
          </article>

          {/* Pro Internal */}
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
              <span className="status-pill">Offsets patching</span>
            </div>
            <p className="status-desc">
              Please wait for the &quot;Undetected&quot; flag before playing
              on mains. For tests, use NFA accounts only.
            </p>
          </article>

          {/* Spoofer */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-ok" />
              <div>
                <h2>NoClip HWID Spoofer</h2>
                <p>HWID protection &amp; cleanup.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-ok">Undetected</span>
              <span className="status-pill">Spoof + cleaner</span>
            </div>
            <p className="status-desc">
              Safe to run. Always spoof &amp; clean before logging into new
              accounts, and don&apos;t reuse banned profiles.
            </p>
          </article>

          {/* Accounts */}
          <article className="status-card">
            <header className="status-card-header">
              <span className="status-dot status-ok" />
              <div>
                <h2>NoClip NFA Rust Accounts</h2>
                <p>Pre-checked NFA stock.</p>
              </div>
            </header>
            <div className="status-pill-row">
              <span className="status-pill status-pill-ok">Healthy stock</span>
              <span className="status-pill">Replacement on arrival</span>
            </div>
            <p className="status-desc">
              Accounts are rotated and checked frequently. Read the Game
              Accounts guide before using them.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
