"use client";

import React, { useState, useEffect } from "react";

// ── Timing (ms) ──────────────────────────────────────────
const T_QUESTION = 1600; // question visible before answer
const T_ANSWER   = 1100; // answer highlighted, no task
const T_TASK     = 2400; // task card visible
const T_NEXT     =  350; // gap before next question

// ── Categories ───────────────────────────────────────────
const CATEGORIES = [
  { key: "H", label: "Evidente",    bg: "#1e293b", fg: "#fff" },
  { key: "S", label: "Seguridad",   bg: "#ef4444", fg: "#fff" },
  { key: "E", label: "Ambiente",    bg: "#16a34a", fg: "#fff" },
  { key: "O", label: "Operaciones", bg: "#2563eb", fg: "#fff" },
  { key: "N", label: "No oper.",    bg: "#6b7280", fg: "#fff" },
];

// ── Steps ─────────────────────────────────────────────────
interface Step {
  cat: string;
  question: string;
  answer: "SÍ" | "NO";
  task?: string;
  taskType?: string;
}

const STEPS: Step[] = [
  {
    cat: "H",
    question: "¿Será evidente para el operario la pérdida de función en circunstancias normales?",
    answer: "NO",
  },
  {
    cat: "H",
    question: "¿Es técnicamente factible y vale la pena una tarea de búsqueda de fallas?",
    answer: "SÍ",
    task: "Búsqueda de fallas",
    taskType: "Inspección funcional",
  },
  {
    cat: "S",
    question: "¿Podría este modo de falla causar daño o muerte a una persona?",
    answer: "NO",
  },
  {
    cat: "E",
    question: "¿Podría este modo de falla infringir normativa medioambiental?",
    answer: "NO",
  },
  {
    cat: "O",
    question: "¿Produce este modo de falla un efecto adverso sobre la capacidad operacional?",
    answer: "SÍ",
  },
  {
    cat: "O",
    question: "¿Es técnicamente factible una tarea de monitoreo de condición?",
    answer: "SÍ",
    task: "Monitoreo de condición",
    taskType: "On-condition",
  },
  {
    cat: "O",
    question: "¿Es técnicamente factible y rentable una tarea de reacondicionamiento cíclico?",
    answer: "NO",
  },
  {
    cat: "O",
    question: "¿Es técnicamente factible y rentable una tarea de sustitución cíclica?",
    answer: "SÍ",
    task: "Sustitución cíclica",
    taskType: "Preventivo fijo",
  },
  {
    cat: "N",
    question: "¿Podría el fallo combinado afectar la seguridad o el medioambiente?",
    answer: "NO",
  },
  {
    cat: "N",
    question: "¿Es rentable alguna tarea de reacondicionamiento o sustitución cíclica?",
    answer: "NO",
    task: "Aceptar consecuencia",
    taskType: "Sin tarea preventiva",
  },
];

type Phase = "question" | "answer" | "task" | "next";


export default function RCMAnimationDecision() {
  const [stepIdx, setStepIdx] = useState(0);
  const [phase, setPhase]     = useState<Phase>("question");

  useEffect(() => {
    const delay =
      phase === "question" ? T_QUESTION :
      phase === "answer"   ? T_ANSWER   :
      phase === "task"     ? T_TASK     : T_NEXT;

    const t = setTimeout(() => {
      if (phase === "question") {
        setPhase("answer");
      } else if (phase === "answer") {
        setPhase(STEPS[stepIdx].task ? "task" : "next");
      } else if (phase === "task") {
        setPhase("next");
      } else {
        setStepIdx((i) => (i + 1) % STEPS.length);
        setPhase("question");
      }
    }, delay);

    return () => clearTimeout(t);
  }, [phase, stepIdx]);

  const step    = STEPS[stepIdx];
  const cat     = CATEGORIES.find((c) => c.key === step.cat)!;
  const showAns = phase === "answer" || phase === "task" || phase === "next";
  const showTask = phase === "task";

  return (
    <div
      className="w-full h-full flex flex-col bg-white select-none"
      style={{ fontFamily: "Inter, system-ui, sans-serif", minHeight: 380 }}
    >
      {/* ── Top bar ───────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 flex-shrink-0">
        <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest">
          Diagrama de Decisión RCM
        </span>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{ background: "#eff6ff", color: "#1d4ed8" }}
        >
          {stepIdx + 1} / {STEPS.length}
        </span>
      </div>

      {/* ── Category tabs ─────────────────────────────── */}
      <div className="flex gap-1.5 px-4 py-2.5 border-b border-gray-100 bg-gray-50 flex-shrink-0">
        {CATEGORIES.map((c) => {
          const active = c.key === step.cat;
          return (
            <div
              key={c.key}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300"
              style={{
                background: active ? c.bg : "#e5e7eb",
                opacity: active ? 1 : 0.45,
              }}
            >
              <span className="font-black text-[11px]" style={{ color: active ? c.fg : "#9ca3af" }}>
                {c.key}
              </span>
              <span className="text-[9px] font-semibold" style={{ color: active ? c.fg : "#9ca3af" }}>
                {c.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* ── Progress bar ──────────────────────────────── */}
      <div className="h-0.5 bg-gray-100 flex-shrink-0">
        <div
          className="h-full transition-all duration-500"
          style={{ width: `${((stepIdx + 1) / STEPS.length) * 100}%`, background: cat.bg }}
        />
      </div>

      {/* ── Body ──────────────────────────────────────── */}
      <div className="flex-1 flex flex-col px-5 py-4 gap-4 min-h-0">

        {/* Category badge */}
        <span
          className="self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: cat.bg + "22", color: cat.bg }}
        >
          {cat.key} — {cat.label}
        </span>

        {/* Question */}
        <div
          className="rounded-xl border px-5 py-4"
          style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}
        >
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">
            Pregunta
          </p>
          <p className="text-sm font-medium text-gray-900 leading-relaxed">
            {step.question}
          </p>
        </div>

        {/* Answer buttons */}
        <div className="flex items-center gap-3">
          {(["SÍ", "NO"] as const).map((opt) => {
            const chosen = showAns && step.answer === opt;
            const other  = showAns && step.answer !== opt;
            return (
              <div
                key={opt}
                className="rounded-lg px-6 py-2 text-sm font-bold transition-all duration-300"
                style={{
                  background: chosen
                    ? opt === "SÍ" ? "#16a34a" : "#dc2626"
                    : "#f1f5f9",
                  color: chosen ? "#fff" : "#cbd5e1",
                  opacity: other ? 0.3 : 1,
                  transform: chosen ? "scale(1.06)" : "scale(1)",
                  boxShadow: chosen ? "0 2px 10px rgba(0,0,0,0.18)" : "none",
                }}
              >
                {opt}
              </div>
            );
          })}

          {showAns && (
            <div
              className="flex items-center gap-1.5 text-[11px] font-semibold"
              style={{ color: step.task ? "#16a34a" : "#94a3b8" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              {step.task ? step.task : "Continúa evaluación"}
            </div>
          )}
        </div>

        {/* Task card */}
        {showTask && step.task && (
          <div
            className="rounded-xl border-l-4 px-5 py-3.5"
            style={{ background: "#f0fdf4", borderColor: "#16a34a" }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#15803d" }}>
                Tarea asignada
              </p>
              <span
                className="text-[9px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: "#dcfce7", color: "#15803d" }}
              >
                {step.taskType}
              </span>
            </div>
            <p className="text-sm font-bold text-gray-900">{step.task}</p>
          </div>
        )}

      </div>

      {/* ── Step dots ─────────────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-2.5 border-t border-gray-100 bg-gray-50 flex-shrink-0">
        <div className="flex gap-1.5 items-center">
          {STEPS.map((s, i) => {
            const active = i === stepIdx;
            const done   = i < stepIdx;
            const c      = CATEGORIES.find((c) => c.key === s.cat)!;
            return (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: active ? 18 : 7,
                  height: 7,
                  background: done ? "#94a3b8" : active ? c.bg : "#e2e8f0",
                }}
              />
            );
          })}
        </div>
        <span className="text-[9px] text-gray-400 font-medium">
          {showTask ? "✓ Tarea definida" : "Evaluando..."}
        </span>
      </div>
    </div>
  );
}
