"use client";

import { useEffect, useState } from "react";
import { Droplets, Zap, Factory } from "lucide-react";
import { Industry } from "@carbon/icons-react";

const industries = [
  { id: "industria-oilygas",    label: "Oil & Gas",    icon: <Droplets size={16} />, activeColor: "text-amber-600 border-b-2 border-amber-500"  },
  { id: "industria-energia",    label: "Energía",      icon: <Zap size={16} />,      activeColor: "text-yellow-600 border-b-2 border-yellow-500" },
  { id: "industria-manufactura",label: "Manufactura",  icon: <Factory size={16} />,  activeColor: "text-teal-600 border-b-2 border-teal-500"    },
  { id: "industria-otras",      label: "Otras",        icon: <Industry size={16} />, activeColor: "text-gray-700 border-b-2 border-gray-400"     },
];

export default function IndustriaNav() {
  const [activeId, setActiveId] = useState<string>("industria-oilygas");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    industries.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-[56px] z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex overflow-x-auto">
        {industries.map(({ id, label, icon, activeColor }) => {
          const isActive = activeId === id;
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0
                ${isActive
                  ? activeColor
                  : "text-gray-500 hover:text-gray-800 border-b-2 border-transparent"
                }`}
            >
              <span className="flex-shrink-0">{icon}</span>
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
