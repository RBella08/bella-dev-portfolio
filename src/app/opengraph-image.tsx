import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b0b12",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(167,139,250,0.3), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 28, color: "#3b82f6", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase" }}>
          <div style={{ width: 12, height: 12, borderRadius: 999, backgroundColor: "#3b82f6" }} />
          Web Developer
        </div>
        <div style={{ marginTop: 24, fontSize: 76, fontWeight: 700, color: "#f5f5f7", lineHeight: 1.1, maxWidth: 900 }}>
          Building websites businesses can rely on.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#9a9aa6" }}>
          {siteConfig.name} — {siteConfig.fullName}
        </div>
      </div>
    ),
    { ...size }
  );
}