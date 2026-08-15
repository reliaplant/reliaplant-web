"use client";

import { useEffect, useState } from "react";

const steps = [
  { id: "paso-1", label: "Activos",         color: "teal"   },
  { id: "paso-2", label: "RCA",             color: "purple" },
  { id: "paso-3", label: "RCM",             color: "blue"   },
  { id: "paso-4", label: "Integración",     color: "orange" },
  { id: "paso-5", label: "Impacto",         color: "green"  },
  { id: "paso-6", label: "Implementación",  color: "blue"   },
];

const activeTextColor: Record<string, string> = {
  teal:   "text-blue-600 border-b-2 border-blue-600",
  purple: "text-blue-600 border-b-2 border-blue-600",
  blue:   "text-blue-600 border-b-2 border-blue-600",
  orange: "text-blue-600 border-b-2 border-blue-600",
  green:  "text-green-600 border-b-2 border-green-600",
};

const numberColor: Record<string, string> = {
  teal:   "text-blue-600",
  purple: "text-blue-600",
  blue:   "text-blue-600",
  orange: "text-blue-600",
  green:  "text-green-600",
};

export default function StepNav() {
  const [activeId, setActiveId] = useState<string>("paso-1");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    steps.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-[56px] z-40 bg-white border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex overflow-x-auto">
        {steps.map((step, i) => {
          const isActive = activeId === step.id;
          return (
            <button
              key={step.id}
              onClick={() => handleClick(step.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0
                ${isActive
                  ? `${activeTextColor[step.color]}`
                  : "text-gray-500 hover:text-gray-800 border-b-2 border-transparent"
                }`}
            >
              <span className={`font-bold ${isActive ? numberColor[step.color] : "text-gray-400"}`}>
                {i + 1}
              </span>
              {step.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
