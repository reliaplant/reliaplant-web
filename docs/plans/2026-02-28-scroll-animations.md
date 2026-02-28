# Scroll-Triggered Animations Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add four scroll-triggered animations to the homepage landing page using framer-motion.

**Architecture:** All changes are contained in `src/app/page.tsx`. We use framer-motion's `useInView` hook for the stats counter and `whileInView` / `variants` props on `motion` components for the remaining reveals. No new files are created.

**Tech Stack:** Next.js 14 (App Router), React, framer-motion v12 (already installed), Tailwind CSS

---

## Reference

Design doc: `docs/plans/2026-02-28-scroll-animations-design.md`

---

### Task 1: Stats Counter Animation

**Files:**
- Modify: `src/app/page.tsx`

**What we're doing:** When the stats bar (`+5000 / +150 / +250`) enters the viewport for the first time, animate each number counting up from 0 to its target over 1.2s with an ease-out curve.

**Step 1: Add imports**

At the top of `src/app/page.tsx`, the file already imports React. Add `useRef, useEffect, useState` if not present, and add `useInView` from framer-motion:

```tsx
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
```

Check existing imports first — `React` is already imported; only add what's missing.

**Step 2: Add state and ref inside the `Home` component**

Add these after the existing `useState` declarations at the top of the component:

```tsx
const statsRef = useRef<HTMLDivElement>(null);
const statsInView = useInView(statsRef, { once: true });
const [statValues, setStatValues] = useState({ assets: 0, rcm: 0, rca: 0 });
```

**Step 3: Add the counter effect**

Add this `useEffect` after the state declarations:

```tsx
useEffect(() => {
  if (!statsInView) return;
  const targets = { assets: 5000, rcm: 150, rca: 250 };
  const duration = 1200;
  const start = performance.now();

  const tick = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    setStatValues({
      assets: Math.round(targets.assets * ease),
      rcm: Math.round(targets.rcm * ease),
      rca: Math.round(targets.rca * ease),
    });
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}, [statsInView]);
```

**Step 4: Attach ref to stats section and update rendered values**

Find the STATS BAR section (search for `/* STATS BAR */`). Attach the ref to the outer section div:

```tsx
<section
  ref={statsRef}
  className="border-y border-gray-100 bg-white py-8 md:py-12 px-4 sm:px-6"
>
```

Then update the stat data array to use the animated state values instead of string literals:

Replace:
```tsx
{ value: '+5000', label: 'Activos gestionados' },
{ value: '+150', label: 'Proyectos RCM' },
{ value: '+250', label: 'Proyectos RCA' },
```

With:
```tsx
{ value: `+${statValues.assets.toLocaleString()}`, label: 'Activos gestionados' },
{ value: `+${statValues.rcm}`, label: 'Proyectos RCM' },
{ value: `+${statValues.rca}`, label: 'Proyectos RCA' },
```

**Step 5: Verify build**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds.

**Step 6: Verify visually**

```bash
npm run dev
```

Open `http://localhost:3000`, scroll to the stats section. Numbers should count up from 0 when they enter the viewport.

**Step 7: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add scroll-triggered stats counter animation"
```

---

### Task 2: Section Headings Fade-Up

**Files:**
- Modify: `src/app/page.tsx`

**What we're doing:** Wrap the H2 headings in the Modules, AI, and Pricing sections with `motion.h2` so they fade up when they enter the viewport.

**Step 1: Import `motion`**

Add to the framer-motion import line (already has `useInView` from Task 1):

```tsx
import { motion, useInView } from "framer-motion";
```

**Step 2: Replace H2 in Modules section**

Find the comment `{/* 3 PILLARS SECTION */}`. Find this h2:

```tsx
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
  Una plataforma diseñada para ingeniería real
</h2>
```

Replace with:

```tsx
<motion.h2
  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  Una plataforma diseñada para ingeniería real
</motion.h2>
```

**Step 3: Replace H2 in AI section**

Find `{/* AI SECTION */}`. Find:

```tsx
<h2 className="text-3xl md:text-4xl font-bold mb-4">
  Inteligencia Artificial{" "}
  <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
    integrada
  </span>
</h2>
```

Replace with:

```tsx
<motion.h2
  className="text-3xl md:text-4xl font-bold mb-4"
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  Inteligencia Artificial{" "}
  <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
    integrada
  </span>
</motion.h2>
```

**Step 4: Replace H2 in Pricing section**

Find `{/* PRICING SECTION */}`. Find:

```tsx
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center w-full">Licencias a la medida de tu planta</h2>
```

Replace with:

```tsx
<motion.h2
  className="text-3xl md:text-4xl font-bold text-gray-900 text-center w-full"
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  Licencias a la medida de tu planta
</motion.h2>
```

**Step 5: Verify build**

```bash
npm run build
```

Expected: No errors.

**Step 6: Verify visually**

```bash
npm run dev
```

Scroll through the page. Each section heading should fade up as it enters the viewport.

**Step 7: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add fade-up animation to section headings"
```

---

### Task 3: Pain Point Pills Stagger

**Files:**
- Modify: `src/app/page.tsx`

**What we're doing:** The 6 red ✕ pills in "El problema" section animate in one-by-one with a 70ms stagger when the section scrolls into view.

**Step 1: Define variants**

Add these variant objects inside the `Home` component body (near the top, after state):

```tsx
const pillVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const pillItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};
```

**Step 2: Wrap the pills container**

Find the comment `{/* Pain point pills */}`. Find:

```tsx
<div className="flex flex-wrap gap-2 mb-6">
```

Replace with:

```tsx
<motion.div
  className="flex flex-wrap gap-2 mb-6"
  variants={pillVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
```

Close it with `</motion.div>` instead of `</div>`.

**Step 3: Wrap each pill**

The pills are rendered via `.map((tag) => (...))`. Wrap the inner `<span>` in `<motion.span>`:

Replace:
```tsx
<span
  key={tag}
  className="inline-flex items-center gap-1.5 font-medium"
  style={{ ... }}
>
  <span className="text-red-400 font-bold text-xs">✕</span>
  {tag}
</span>
```

With:
```tsx
<motion.span
  key={tag}
  className="inline-flex items-center gap-1.5 font-medium"
  style={{ ... }}
  variants={pillItemVariants}
>
  <span className="text-red-400 font-bold text-xs">✕</span>
  {tag}
</motion.span>
```

**Step 4: Verify build**

```bash
npm run build
```

Expected: No errors.

**Step 5: Verify visually**

```bash
npm run dev
```

Scroll to "El problema" section. Pills should stagger in one by one.

**Step 6: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add staggered reveal animation to pain point pills"
```

---

### Task 4: AI Cards Stagger

**Files:**
- Modify: `src/app/page.tsx`

**What we're doing:** The 3 dark glass cards in the AI section stagger in with 120ms between each card.

**Step 1: Define variants**

Add inside the `Home` component body (next to the pill variants):

```tsx
const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
```

**Step 2: Wrap the cards grid**

In the AI section, find:

```tsx
<div className="grid md:grid-cols-3 gap-6">
```

Replace with:

```tsx
<motion.div
  className="grid md:grid-cols-3 gap-6"
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
```

Close with `</motion.div>`.

**Step 3: Wrap each card**

The 3 cards are `<div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left ...">`. Wrap each one with `motion.div` and add `variants={cardItemVariants}`:

```tsx
<motion.div
  className="bg-white/5 border border-white/10 rounded-2xl p-8 text-left hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
  variants={cardItemVariants}
>
  {/* card content unchanged */}
</motion.div>
```

Do this for all 3 cards.

**Step 4: Verify build**

```bash
npm run build
```

Expected: No errors.

**Step 5: Verify visually**

```bash
npm run dev
```

Scroll to the AI section. All 3 cards should stagger in sequentially.

**Step 6: Final commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add staggered reveal animation to AI feature cards"
```

---

## Done

All 4 animations are implemented. The page now has:
- Counting stats on scroll
- Section heading fade-ups
- Staggered pain point pills
- Staggered AI cards

All animations fire once, respect `prefers-reduced-motion`, and add zero new dependencies.
