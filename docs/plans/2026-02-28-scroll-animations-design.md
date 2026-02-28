# Scroll-Triggered Animations — Design Doc

**Date:** 2026-02-28
**Scope:** `src/app/page.tsx`
**Approach:** Framer Motion Option A — `useInView` + `motion` components inline

---

## Context

The homepage had hover transitions but no scroll-triggered animations, making it feel static. Four targeted animations are added to improve perceived quality without changing the layout or brand identity.

---

## Animations

### 1. Stats Counter
- **Target:** `+5000 activos`, `+150 proyectos RCM`, `+250 proyectos RCA`
- **Trigger:** `useInView(ref, { once: true })` on the stats section
- **Behavior:** `useEffect` runs a `requestAnimationFrame` loop counting from 0 to target over ~1.2s with ease-out curve. Fires once per page load.

### 2. Section Headings Fade-Up
- **Target:** H2 titles in Modules, AI, and Pricing sections
- **Behavior:** `motion.h2` with `initial={{ opacity: 0, y: 16 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`, `transition={{ duration: 0.4, ease: 'easeOut' }}`

### 3. Pain Point Pills Stagger
- **Target:** 6 red ✕ pill tags in the "El problema" section
- **Behavior:** Container `motion.div` with `staggerChildren: 0.07`. Each pill uses `variants` with `hidden: { opacity: 0, y: 8 }` → `visible: { opacity: 1, y: 0 }`. Container triggers `whileInView="visible"` with `viewport={{ once: true }}`.

### 4. AI Cards Stagger
- **Target:** 3 dark glass cards in the AI section
- **Behavior:** Same stagger pattern. `staggerChildren: 0.12`. Each card animates from `{ opacity: 0, y: 20 }` → `{ opacity: 1, y: 0 }`.

---

## Technical Notes

- No new dependencies — framer-motion v12 already installed
- All changes in `src/app/page.tsx` only
- Framer Motion automatically respects `prefers-reduced-motion`
- All animations use `once: true` — no replay on scroll back up

---

## Out of Scope

- Module cards (kept static per user preference)
- Page-load hero animation
- Any other pages
