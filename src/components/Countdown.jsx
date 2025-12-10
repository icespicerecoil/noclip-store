// src/components/Countdown.jsx
import { useEffect, useState } from "react";

/**
 * Countdown component
 * Expects `targetTime` as a number (timestamp, e.g. Date.now() + 72h)
 * Shows HH:MM:SS, up to 72 hours.
 */
export default function Countdown({ targetTime }) {
  const calc = () => {
    const diff = targetTime - Date.now();
    if (diff <= 0) return null;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };

  const [t, setT] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, [targetTime]);

  if (!t) {
    return (
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "0.9rem",
          fontWeight: 700,
          color: "#ff4d4d",
        }}
      >
        EXPIRED
      </span>
    );
  }

  return (
    <span
      style={{
        fontFamily: "monospace",
        fontSize: "1.1rem",
        fontWeight: 700,
        padding: "4px 10px",
        borderRadius: "999px",
        background: "rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 0 10px rgba(0,0,0,0.7)",
      }}
    >
      {t.hours}:{t.minutes}:{t.seconds}
    </span>
  );
}
