# Términos de Uso — Design Document

**Date:** 2026-02-28
**Status:** Approved

---

## Goal

Create a complete, legally sound Terms of Use page for Reliaplant at `/terminos-de-uso`, consolidating the service conditions already defined in `pricing/compare` with a general legal wrapper.

---

## Legal Data

| Field | Value |
|-------|-------|
| Entity | Reliaplant LLC |
| Jurisdiction | State of Wyoming, United States |
| Contact email | contacto@reliaplant.com |
| Platform | app.reliaplant.com |
| Effective date | February 28, 2026 |

---

## Architecture

**Route:** `src/app/terminos-de-uso/page.tsx`

**Type:** Server Component (no `'use client'`) — renders as static HTML, good for SEO.

**Layout (desktop):** Two-column — sticky table of contents on the left (`w-64`), content on the right (`max-w-3xl`).

**Layout (mobile):** Single column — TOC links shown as a compact list above the content.

**Hero:** Compact dark header (same pattern as `/about`) with title "Términos de Uso" and effective date.

**Metadata:** `title` and `description` exported for SEO.

---

## Sections

The document is divided into two blocks:

### Block A — General Legal Framework (new content)

1. **Introducción** — Identifies Reliaplant LLC (Wyoming, USA) as the operator of the Platform. States that using the Platform constitutes acceptance of these terms.
2. **Aceptación de los términos** — By registering or using the Platform, the user agrees to all terms. If the user does not agree, they must stop using the Platform.
3. **Registro y cuenta de usuario** — Users must provide accurate information. Each account is individual and non-transferable. The user is responsible for account security. Must notify contacto@reliaplant.com of any breach.
4. **Conductas prohibidas** — Prohibits: sharing credentials, scraping, reverse engineering, uploading malicious content, using the Platform for illegal purposes, unauthorized commercial resale.

### Block B — Service Conditions (ported from `pricing/compare`)

5. **Definiciones** — Plataforma, Organización, Usuario, Activo, Planta, Bloque adicional, Asistente IA.
6. **Planes y suscripciones** — Four plans: Gratuito, Profesional, Equipo, Planta. Empresa plan available by request.
7. **Límites y uso aceptable** — Per-plan limits on users, assets, plants, storage, AI usage.
8. **Bloques de activos adicionales** — $25 USD/month per 50-asset block; available on Equipo and Planta plans; prorated billing.
9. **Facturación y métodos de pago** — Per-plan payment methods (card, bank transfer, purchase order). 15% annual discount.
10. **Suspensión, cancelación y reembolsos** — 7-day grace period on payment failure; 90-day data retention after suspension; pro-rated annual refunds within 30 days.
11. **Propiedad de los datos** — Data belongs to the Organization. Reliaplant acts as data processor only. AI does not use data for model training.
12. **Disponibilidad del servicio (SLA)** — 99.5% monthly uptime for paid plans. Support hours: Mon–Fri 9:00–18:00 GMT-6, in Spanish and English.
13. **Modificaciones a los planes** — 30-day notice for price changes; 15-day notice for feature changes.
14. **Plan Gratuito — condiciones especiales** — Reliaplant may limit or discontinue it with 60 days notice. Inactive accounts (>180 days) may be deactivated with 30 days notice.

### Block C — General Legal Clauses (new content)

15. **Propiedad intelectual** — All platform software, UI, brand, and content belong to Reliaplant LLC. Users may not copy, reproduce, or commercially exploit them. User data remains user property.
16. **Limitación de responsabilidad** — Platform provided "as-is." Reliaplant is not liable for indirect, incidental, or consequential damages. Maximum liability capped at amounts paid in the last 3 months.
17. **Ley aplicable y jurisdicción** — Governed by laws of the State of Wyoming, USA. Disputes submitted to courts of competent jurisdiction in Wyoming.
18. **Modificaciones a estos términos** — Reliaplant may update these terms with 30-day notice via email or in-platform notification. Continued use constitutes acceptance.
19. **Contacto** — contacto@reliaplant.com

---

## Content Strategy

The substantive service conditions (sections 5–14) are already fully written in `src/app/pricing/compare/page.tsx`. They will be ported verbatim into the Terms page to ensure consistency. The compare page retains its own copy for now; a future cleanup can replace it with a link to this page.

---

## Out of Scope

- Cookie policy (separate document)
- Privacy policy (separate document)
- MDX or CMS-driven content
- Interactive elements beyond the TOC links
