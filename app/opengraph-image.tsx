import { ImageResponse } from "next/og";

export const alt = "Varebilklar – ville du bestått? 10 gratis spørsmål";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f3b3a",
          color: "#fff",
          padding: "64px 72px",
          borderBottom: "18px solid #ffc20e",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 38, fontWeight: 800 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 10,
              background: "#ffc20e",
              color: "#1a1500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
            }}
          >
            V
          </div>
          Varebilklar
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Ville du bestått?
          </div>
          <div style={{ fontSize: 40, color: "#c9cfd4", lineHeight: 1.25 }}>
            Kjøre- og hviletid og fartsskriver for varebil fra 1. april 2027. Test deg med 10 gratis spørsmål.
          </div>
        </div>
        <div style={{ display: "flex", gap: 22, fontSize: 30 }}>
          <div style={{ display: "flex", background: "#0a2c2b", border: "2px solid #2a6d66", borderRadius: 10, padding: "10px 20px", color: "#b8f26b" }}>
            74 % strøk på løyveeksamen
          </div>
          <div style={{ display: "flex", background: "#0a2c2b", border: "2px solid #2a6d66", borderRadius: 10, padding: "10px 20px", color: "#b8f26b" }}>
            30 av 35 for å bestå
          </div>
        </div>
      </div>
    ),
    size
  );
}
