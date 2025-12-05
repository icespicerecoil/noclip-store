import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth(); // user = logged in user OR null

  return (
    <header className="nav">
      <Link to="/" className="nav-logo">
        <span className="nav-logo-main">NOCLIP</span>
        <span className="nav-logo-sub">STORE</span>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/status">Status</Link>
        <Link to="/support">Support</Link>

        {/* DISCORD BUTTON */}
        <a
          href="https://discord.gg/EuFPeMAqc3"
          className="discord-btn"
          target="_blank"
          rel="noreferrer"
        >
          Join Discord
        </a>

        {/* AUTH BUTTONS */}
        {!user && (
          <>
            <Link to="/login" className="auth-btn">
              Login
            </Link>
            <Link to="/signup" className="auth-btn auth-btn-outline">
              Sign Up
            </Link>
          </>
        )}

        {user && (
          <button className="auth-btn logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
