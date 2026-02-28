import { ImageResponse } from "next/og";

export const alt = "Reliaplant – Confiabilidad Industrial y Gestión de Activos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1e3a5f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Logo text */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: 16,
          }}
        >
          RELIAPLANT
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#93c5fd",
            fontSize: 30,
            fontWeight: 400,
            marginBottom: 48,
          }}
        >
          Confiabilidad Industrial y Gestión de Activos
        </div>

        {/* Module badges */}
        <div style={{ display: "flex", gap: 24 }}>
          {["Análisis Causa Raíz", "RCM", "Registro de Activos"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(37, 99, 235, 0.85)",
                  color: "#ffffff",
                  padding: "12px 28px",
                  borderRadius: 10,
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {label}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "rgba(255,255,255,0.35)",
            fontSize: 18,
          }}
        >
          reliaplant.com
        </div>
      </div>
    ),
    { ...size }
  );
}
