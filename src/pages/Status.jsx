export default function Status() {
  return (
    <main className="section section-dark">
      <div className="section-inner">
        <h1 className="section-title">NoClip cheat status</h1>
        <p className="section-sub">
          Manual updates – not auto-generated. Always double-check announcements in Discord
          for the very latest info.
        </p>

        <div className="status-grid status-grid-large">
          <div className="status-card status-card-large">
            <div className="status-card-header">
              <span className="status-name">NoClip External</span>
              <span className="status-pill status-pill-ok">Undetected</span>
            </div>
            <p className="status-desc">
              Fully working on latest Rust patch. Recommended for main accounts and safer
              playstyles.
            </p>
          </div>

          <div className="status-card status-card-large">
            <div className="status-card-header">
              <span className="status-name">NoClip Pro (Internal)</span>
              <span className="status-pill status-pill-warn">Updating</span>
            </div>
            <p className="status-desc">
              Game updated recently. We&apos;re pushing a new build – keep an eye on Discord
              announcements and don&apos;t inject until marked UD again.
            </p>
          </div>

          <div className="status-card status-card-large">
            <div className="status-card-header">
              <span className="status-name">NoClip HWID Spoofer</span>
              <span className="status-pill status-pill-ok">Online</span>
            </div>
            <p className="status-desc">
              Safe to use with both cheats. Always spoof before logging into fresh accounts.
            </p>
          </div>
        </div>

        <p className="status-footnote">
          * Status is for demonstration only. In a real deployment you would pull this from
          an API or your panel.
        </p>
      </div>
    </main>
  );
}
