"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RotateCw, Droplets, ArrowDownToLine, Gauge } from "lucide-react";

interface Card {
  badge: string;
  badgeStyle: React.CSSProperties;
  title?: string;
  body: React.ReactNode;
  cardStyle?: React.CSSProperties;
}

const cards: Card[] = [
  {
    badge: "1 · el escenario",
    badgeStyle: {
      background: "#f1f5f9",
      color: "#64748b",
      border: "1px solid #e2e8f0",
    },
    body: (
      <p style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.6 }}>
        La planta tenía <strong>40 bombas</strong> registradas en su CMMS, todas
        bajo la etiqueta genérica <em>"Bomba"</em> en texto libre.
      </p>
    ),
  },
  {
    badge: "2 · sin taxonomía",
    badgeStyle: {
      background: "#fff1f2",
      color: "#991b1b",
      border: "1px solid #fecaca",
    },
    body: (
      <>
        <p style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.6, marginBottom: 10 }}>
          Debajo de esa etiqueta había en realidad <strong>4 clases distintas:</strong>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {([
            { icon: <RotateCw size={13} />, label: "22 centrífugas horizontales" },
            { icon: <Droplets size={13} />,  label: "8 dosificadoras (PD)" },
            { icon: <ArrowDownToLine size={13} />, label: "6 sumergibles verticales" },
            { icon: <Gauge size={13} />,     label: "4 de alta presión" },
          ] as { icon: React.ReactNode; label: string }[]).map(({ icon, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: "0.78rem",
                color: "#7f1d1d",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: "#fff1f2",
                  border: "1px solid #fecaca",
                  color: "#f87171",
                  flexShrink: 0,
                }}
              >
                {icon}
              </span>
              {label}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    badge: "3 · el resultado",
    badgeStyle: {
      background: "#fff1f2",
      color: "#991b1b",
      border: "1px solid #fecaca",
    },
    cardStyle: { background: "#fff5f5", borderColor: "#fecaca" },
    body: (
      <>
        <p style={{ fontSize: "0.82rem", color: "#7f1d1d", lineHeight: 1.6, marginBottom: 10 }}>
          Modos de falla mezclados: desgaste de diafragma, infiltración de
          sólidos, fatiga de sello.
        </p>
        <p style={{ fontSize: "2rem", fontWeight: 800, color: "#f87171", lineHeight: 1, marginBottom: 4 }}>
          2,100 h
        </p>
        <p style={{ fontSize: "0.75rem", color: "#9f1239", fontWeight: 600 }}>
          un promedio sin significado
        </p>
      </>
    ),
  },
  {
    badge: "4 · ISO 14224 nivel 6",
    badgeStyle: {
      background: "#eff6ff",
      color: "#1e40af",
      border: "1px solid #bfdbfe",
    },
    body: (
      <p style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.6 }}>
        Al reclasificar cada bomba en su clase específica, con atributos de
        fabricante y datos operacionales estandarizados, la mezcla desapareció.
      </p>
    ),
  },
  {
    badge: "5 · MTBF real",
    badgeStyle: {
      background: "#eff6ff",
      color: "#1e40af",
      border: "1px solid #bfdbfe",
    },
    cardStyle: { background: "#eff6ff", borderColor: "#bfdbfe" },
    body: (
      <>
        <p style={{ fontSize: "0.82rem", color: "#1e3a8a", lineHeight: 1.6, marginBottom: 10 }}>
          Filtrando las 22 centrífugas de proceso, comparable con benchmark OREDA:
        </p>
        <p style={{ fontSize: "2rem", fontWeight: 800, color: "#2563eb", lineHeight: 1, marginBottom: 4 }}>
          4,200 h
        </p>
        <p style={{ fontSize: "0.75rem", color: "#1e40af", fontWeight: 600 }}>
          vs. 2,100 h del promedio mezclado
        </p>
      </>
    ),
  },
  {
    badge: "6 · decisión justificada",
    badgeStyle: {
      background: "#eff6ff",
      color: "#1e40af",
      border: "1px solid #bfdbfe",
    },
    body: (
      <blockquote style={{ fontSize: "0.85rem", color: "#1e3a8a", fontStyle: "italic", lineHeight: 1.65, margin: 0, borderLeft: "3px solid #2563eb", paddingLeft: 12 }}>
        "Las centrífugas de proceso fallan 2× más frecuente que el estándar de
        industria para su clase."
      </blockquote>
    ),
  },
];

const CARD_GAP = 12;
const CARD_WIDTH_DESKTOP = 360;
const CARD_WIDTH_MOBILE = 290;

export default function TaxonomyMTBFCase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = cards.length;

  const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;

  // Detect mobile
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const goTo = (idx: number) => setActiveIndex(((idx % total) + total) % total);
  const prev = () => goTo(activeIndex - 1);
  const next = () => goTo(activeIndex + 1);

  const translateX = -(activeIndex * (cardWidth + CARD_GAP));

  return (
    <section className="py-8 md:py-12 bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-auto">
        {/* Header */}
        <div className="mb-6">
          <span
            className="block font-bold uppercase mb-3"
            style={{ fontSize: "0.6875rem", letterSpacing: "0.12em", color: "#ef4444" }}
          >
            El caso
          </span>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            MTBF de &quot;bombas&quot; en una planta
          </h2>
          <p
            className="text-sm text-gray-600 leading-relaxed max-w-3xl"
          >
            Al no haber estructurado correctamente la taxonomía de sus activos, los
            indicadores de la planta estaban equivocados. El gerente de confiabilidad
            necesitaba calcular el MTBF real de sus bombas centrífugas de proceso para
            justificar una inversión en sellos mecánicos mejorados — pero antes de tener
            ese número, necesitaba saber exactamente qué estaba midiendo.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            style={{
              display: "flex",
              gap: CARD_GAP,
              transform: `translateX(${translateX}px)`,
              transition: "transform 500ms ease",
              willChange: "transform",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                tabIndex={0}
                style={{
                  width: cardWidth,
                  flexShrink: 0,
                  border: "1px solid #e2e8f0",
                  borderRadius: 10,
                  padding: "16px",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  ...card.cardStyle,
                }}
              >
                {/* Badge */}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    borderRadius: 999,
                    padding: "3px 10px",
                    alignSelf: "flex-start",
                    ...card.badgeStyle,
                  }}
                >
                  {card.badge}
                </span>

                {/* Body */}
                <div>{card.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls: prev / dots / next */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={prev}
            aria-label="Tarjeta anterior"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              cursor: "pointer",
              color: "#64748b",
              flexShrink: 0,
            }}
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a tarjeta ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                padding: 0,
                background: i === activeIndex ? "#2563eb" : "#d1d5db",
                transition: "background 300ms",
              }}
            />
          ))}
          </div>

          <button
            onClick={next}
            aria-label="Tarjeta siguiente"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              cursor: "pointer",
              color: "#64748b",
              flexShrink: 0,
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 pt-4 mt-6 text-center">
          <p className="font-bold text-gray-900 text-sm">
            La base de la confiabilidad está en la taxonomía correcta.
          </p>
        </div>
      </div>
    </section>
  );
}
