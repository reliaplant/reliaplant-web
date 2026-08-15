"use client";
import React, { useState, useEffect } from "react";
import { Catalog, Network_3, DataStructured, ArrowLeft } from "@carbon/icons-react";
import Link from "next/link";

interface ModuleStickyBannerProps {
  moduleName: string;
  moduleType: "registro" | "rca" | "rcm";
}

const moduleConfig = {
  registro: {
    icon: Catalog,
    bgColor: "bg-blue-600",
    borderColor: "border-blue-500",
  },
  rca: {
    icon: Network_3,
    bgColor: "bg-blue-600",
    borderColor: "border-blue-500",
  },
  rcm: {
    icon: DataStructured,
    bgColor: "bg-blue-600",
    borderColor: "border-blue-500",
  },
};

export default function ModuleStickyBanner({
  moduleName,
  moduleType,
}: ModuleStickyBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling past ~400px (hero section)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const config = moduleConfig[moduleType];
  const Icon = config.icon;

  return (
    <div
      className={`fixed top-[56px] left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`${config.bgColor} border-b ${config.borderColor} py-2 px-4`}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link 
            href="/#modulos" 
            className="flex items-center justify-center w-7 h-7 bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Ver módulos"
          >
            <ArrowLeft size={14} className="text-white" />
          </Link>
          <div className="flex items-center gap-2">
            <Icon size={16} className="text-white/70" />
            <span className="text-white text-sm font-medium">{moduleName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
