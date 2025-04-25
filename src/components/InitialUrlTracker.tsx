// components/InitialUrlTracker.js
"use client";

import { useEffect } from "react";

export default function InitialUrlTracker() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !sessionStorage.getItem("initialUrl")
    ) {
      sessionStorage.setItem("initialUrl", window.location.href);
    }
  }, []);

  return null; // Este componente no necesita renderizar nada
}
