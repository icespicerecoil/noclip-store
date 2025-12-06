// src/pages/Support.jsx
import React from "react";
import "./Support.css";

export default function Support() {
  return (
    <main className="support-page">
      <section className="support-hero">
        <div className="support-left">
          <p className="support-kicker">noclip° support</p>
          <h1 className="support-title">
            Real help from <span>people who actually play Rust.</span>
          </h1>
          <p className="support-sub">
            If you get stuck on install, configs, HWID issues or bans, open a
            ticket and one of the staff will walk you through it step by step.
          </p>

          <div className="support-pills">
            <span className="support-pill">Screen-share help</span>
            <span className="support-pill">Config tuning</span>
            <span className="support-pill">Ban advice</span>
          </div>
        </div>

        <div className="support-right">
          <div className="support-card">
            <h2>Open a ticket</h2>
            <p>
              Tickets are handled in Discord. Use your order email or key when
              possible so staff can find you faster.
            </p>
            <a
              href="https://discord.gg/EuFPeMAqc3"
              target="_blank"
              rel="noreferrer"
              className="support-btn-primary"
            >
              Go to Discord
            </a>
            <p className="support-note">
              Please don&apos;t spam multiple tickets for the same issue – it
              only slows the queue down.
            </p>
          </div>
        </div>
      </section>

      <section className="support-faq-section">
        <div className="support-faq-grid">
          <article className="support-faq-card">
            <h3>What info should I include?</h3>
            <p>
              Send your order email, the product you bought and a short summary
              of the problem. Screenshots of errors help a lot.
            </p>
          </article>

          <article className="support-faq-card">
            <h3>How fast is support?</h3>
            <p>
              Response time depends on queue &amp; time of day, but most tickets
              get a first reply within a few hours.
            </p>
          </article>

          <article className="support-faq-card">
            <h3>What can you help with?</h3>
            <p>
              Install issues, loader errors, config tuning, performance problems
              and basic ban / HWID advice.
            </p>
          </article>

          <article className="support-faq-card">
            <h3>Refund policy basics</h3>
            <p>
              If something is fully broken on our side and can&apos;t be fixed,
              staff will review options. Abused or clearly misused keys are not
              eligible.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
