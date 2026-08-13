"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/utils/blogContent";

export default function BlogToc({ toc }: { toc: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const headingEls = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headingEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -70% 0px" }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  if (toc.length < 3) return null;

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0 sticky top-10 self-start">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
        En este artículo
      </p>
      <nav className="flex flex-col gap-1 border-l border-gray-200">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm py-1 border-l-2 -ml-px transition-colors ${
              item.level === 3 ? "pl-8" : "pl-4"
            } ${
              activeId === item.id
                ? "border-indigo-600 text-indigo-600 font-medium"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
