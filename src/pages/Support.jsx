export default function Support() {
  return (
    <div className="section section-dark support-layout">
      <div>
        <h2 className="section-title">Support</h2>
        <p className="section-sub">
          Fast Discord support, email support, and custom requests.
        </p>

        <ul className="support-list">
          <li>💬 Discord support</li>
          <li>📧 Email tickets</li>
          <li>📝 Custom configs / GFX / setups</li>
        </ul>
      </div>

      <form
        className="support-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Demo only.");
        }}
      >
        <input type="text" placeholder="Discord tag" required />
        <input type="email" placeholder="Email" required />
        <textarea rows="4" placeholder="Message..." required />
        <button type="submit" className="btn-primary">Send</button>
      </form>
    </div>
  );
}
