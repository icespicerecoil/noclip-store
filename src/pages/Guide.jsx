// src/pages/Guide.jsx
import React, { useState, useMemo } from "react";
import "./Guide.css";

const SECTIONS = [
  {
    id: "welcome",
    group: "GENERAL",
    label: "Welcome",
    next: "game-accounts",
  },
  {
    id: "game-accounts",
    group: "GAME ACCOUNTS",
    label: "Game Accounts",
    next: "noclip-external",
  },
  {
    id: "noclip-external",
    group: "RUST",
    label: "NoClip External",
    next: "noclip-pro",
  },
  {
    id: "noclip-pro",
    group: "RUST",
    label: "NoClip Pro (Internal)",
    next: "hwid-spoofer",
  },
  {
    id: "hwid-spoofer",
    group: "HWID",
    label: "HWID Spoofer",
    next: null,
  },
];

function SectionContent({ id }) {
  switch (id) {
    case "welcome":
      return (
        <>
          <p className="guide-lede">
            Here you’ll find clear, step-by-step guides to help you make the
            most out of noclip° products. Whether you’re a first-time user or
            looking to master advanced setups, this documentation walks you
            through everything you need.
          </p>

          <p>
            Need help or want to connect with the community? Join our official{" "}
            <a
              href="https://discord.gg/EuFPeMAqc3"
              target="_blank"
              rel="noreferrer"
            >
              Discord server
            </a>{" "}
            for support, updates, and exclusive resources.
          </p>

          <div className="guide-grid">
            <div className="guide-card">
              <h2>What you’ll find here</h2>
              <ul>
                <li>Safe setup instructions for every noclip° product.</li>
                <li>Recommended practices to reduce detection risk.</li>
                <li>How to use NFA Rust accounts securely.</li>
                <li>Troubleshooting pointers and status checks.</li>
              </ul>
            </div>

            <div className="guide-card guide-card-highlight">
              <h2>Quick start checklist</h2>
              <ol>
                <li>Read the Game Accounts section before logging in.</li>
                <li>Check the Status page before any fresh session.</li>
                <li>Use unique passwords & keep mail secure.</li>
                <li>Open a ticket on Discord if anything feels off.</li>
              </ol>
            </div>
          </div>
        </>
      );

    case "game-accounts":
      return (
        <>
          <p className="guide-lede">
            noclip° NFA Rust accounts are fresh, pre-checked accounts ideal for
            testing, closet cheating, or backup identities. This guide explains
            how delivery works and how to use them safely.
          </p>

          <h2>How delivery works</h2>
          <ul>
            <li>Accounts are delivered instantly after payment.</li>
            <li>
              You’ll receive login details via the email linked to your
              purchase.
            </li>
            <li>Each account is checked before being added to stock.</li>
          </ul>

          <h2>Recommended steps after purchase</h2>
          <ol>
            <li>Log in to Steam with the provided credentials.</li>
            <li>Change the password immediately.</li>
            <li>
              Add Steam Guard / email protection if you want to keep the
              account.
            </li>
            <li>
              Avoid adding your main phone number if you only use the account
              temporarily.
            </li>
          </ol>

          <h2>Safety tips</h2>
          <ul>
            <li>Never reuse the same password from your main accounts.</li>
            <li>
              Keep NFA accounts separated from your main to reduce link-risk.
            </li>
            <li>Always check the status page before playing.</li>
          </ul>
        </>
      );

    case "noclip-external":
      return (
        <>
          <p className="guide-lede">
            NoClip External is a low-footprint, overlay-based cheat designed for
            legit and closet playstyles. Follow these steps for the cleanest,
            safest experience.
          </p>

          <h2>Before you start</h2>
          <ul>
            <li>Ensure Windows is fully updated (10 / 11, 64-bit).</li>
            <li>Disable unnecessary background overlays (NVIDIA, Xbox, etc).</li>
            <li>Check that any previous cheats / loaders are fully removed.</li>
          </ul>

          <h2>External setup</h2>
          <ol>
            <li>Download the loader from your key page or panel.</li>
            <li>Disable antivirus temporarily (or exclude the loader).</li>
            <li>Right-click &quot;Run as Administrator&quot; on the loader.</li>
            <li>Enter your key when prompted and wait for injection.</li>
            <li>Launch Rust once prompted and load your saved config.</li>
          </ol>

          <h2>Playstyle notes</h2>
          <ul>
            <li>Keep ESP subtle; avoid obvious snaps and hard locks.</li>
            <li>Use FOV and smoothing settings that still look human.</li>
            <li>Change configs occasionally, especially after updates.</li>
          </ul>
        </>
      );

    case "noclip-pro":
      return (
        <>
          <p className="guide-lede">
            NoClip Pro is a configurable internal with layers, aimbot, and
            recoil control for players who want maximum control over every
            fight while still staying under the radar.
          </p>

          <h2>Internal loader flow</h2>
          <ol>
            <li>Make sure Secure Boot is off and virtualization is on.</li>
            <li>Close Steam completely from the system tray.</li>
            <li>
              Run the Pro loader as Administrator and wait for the ready
              message.
            </li>
            <li>Start Steam, then Rust when the loader instructs you.</li>
            <li>Open the in-game menu and load a legit / closet config.</li>
          </ol>

          <h2>Config guidelines</h2>
          <ul>
            <li>Use per-weapon recoil control; avoid zero-recoil rage setups.</li>
            <li>Lower your ESP range in busy areas to reduce clutter.</li>
            <li>Save multiple profiles (legit, team play, solo farm, etc.).</li>
          </ul>

          <h2>After each session</h2>
          <ul>
            <li>Close the loader first, then Rust, then Steam.</li>
            <li>Reboot after long sessions or updates for a clean start.</li>
          </ul>
        </>
      );

    case "hwid-spoofer":
      return (
        <>
          <p className="guide-lede">
            The HWID Spoofer is designed to protect fresh accounts and help
            reset identifiers when things go wrong. Use it carefully and always
            follow the steps in order.
          </p>

          <h2>Clean & spoof routine</h2>
          <ol>
            <li>Close Steam, Rust, and all launchers.</li>
            <li>Run the spoofer as Administrator.</li>
            <li>
              Use the cleaner first if you’ve been banned on this machine
              before.
            </li>
            <li>Apply the spoof, then reboot your PC when prompted.</li>
            <li>Only then, log into Steam / Rust with your fresh account.</li>
          </ol>

          <h2>Best practices</h2>
          <ul>
            <li>Don’t mix a &quot;clean&quot; account with obviously risky play.</li>
            <li>Keep backups of important, non-Rust accounts separate.</li>
            <li>Never share your spoofer or loader files with other people.</li>
          </ul>
        </>
      );

    default:
      return null;
  }
}

export default function Guide() {
  const [activeId, setActiveId] = useState("welcome");

  const activeSection = useMemo(
    () => SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0],
    [activeId]
  );

  const nextSection = useMemo(
    () =>
      activeSection.next
        ? SECTIONS.find((s) => s.id === activeSection.next)
        : null,
    [activeSection]
  );

  const groups = useMemo(() => {
    const map = new Map();
    SECTIONS.forEach((s) => {
      if (!map.has(s.group)) map.set(s.group, []);
      map.get(s.group).push(s);
    });
    return Array.from(map.entries());
  }, []);

  return (
    <div className="guide-page">
      {/* Animated background blobs */}
      <div className="guide-bg guide-bg-one" />
      <div className="guide-bg guide-bg-two" />

      {/* SIDEBAR */}
      <aside className="guide-sidebar">
        <div className="guide-sidebar-header">
          <span className="guide-sidebar-pill">noclip° docs</span>
        </div>

        {groups.map(([groupName, items]) => (
          <div key={groupName} className="guide-sidebar-group">
            <h3>{groupName}</h3>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={
                      "guide-sidebar-link" +
                      (item.id === activeId ? " active" : "")
                    }
                    onClick={() => setActiveId(item.id)}
                  >
                    <span className="dot" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* MAIN CONTENT */}
      <main className="guide-main">
        <div className="guide-main-inner">
          <header className="guide-header">
            <p className="guide-eyebrow">Documentation · noclip°</p>
            <h1>Welcome To NoClip Docs</h1>
          </header>

          <section className="guide-shell">
            <SectionContent id={activeId} />

            <div className="guide-footer">
              {nextSection && (
                <button
                  type="button"
                  className="guide-next-card"
                  onClick={() => setActiveId(nextSection.id)}
                >
                  <span className="guide-next-label">Next</span>
                  <span className="guide-next-title">
                    {nextSection.label}
                    <span className="arrow">↗</span>
                  </span>
                </button>
              )}

              <p className="guide-updated">Last updated just now</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
