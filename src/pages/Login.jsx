// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth(); // from your AuthContext
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password); // Firebase login inside your context
      navigate("/products");        // send to products after login
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>
        <p className="auth-sub">
          Log into your <span>NOCLIP</span> account.
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>

          <button type="submit" disabled={loading} className="auth-primary-btn">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth-footer-text">
          No account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
