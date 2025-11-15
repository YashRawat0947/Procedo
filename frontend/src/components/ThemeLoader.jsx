// src/components/ThemeLoader.jsx
import React from "react";

export default function ThemeLoader({ theme = "bright" }) {
  const overlayStyle = theme === "dark" ? "rgba(2,6,23,0.7)" : "rgba(255,255,255,0.9)";
  const bgClass = theme === "dark" ? "bg-gradient-to-br from-black/60 to-gray-900/60" : "bg-gradient-to-br from-[#FFF6EC] via-white to-[#FFE8D6]";
  const accent = "linear-gradient(90deg,#F24E1E,#d63e13)";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)",
        background: overlayStyle,
      }}
    >
      <div style={{
        padding: 20,
        borderRadius: 14,
        minWidth: 260,
        display: "flex",
        gap: 12,
        alignItems: "center",
        justifyContent: "center",
        background: theme === "dark" ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.95)",
        boxShadow: theme === "dark" ? "0 10px 30px rgba(0,0,0,0.6)" : "0 8px 20px rgba(0,0,0,0.08)"
      }}>
        <div style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: accent,
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" style={{ animation: "spin 900ms linear infinite", color: "#071116" }}>
            <path fill="currentColor" d="M12 2v4a6 6 0 0 1 0 12v4a10 10 0 0 0 0-20z" />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ fontSize: 15 }}>{`Switching to ${theme} theme`}</strong>
          <span style={{ fontSize: 13, color: theme === "dark" ? "#94A3B8" : "#6B7280" }}>Applying theme colors...</span>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg) }
          100% { transform: rotate(360deg) }
        }
      `}</style>
    </div>
  );
}
