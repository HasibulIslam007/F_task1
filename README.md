# Order Tracking — Premium Mobile Experience

Apple-inspired, premium SaaS-style mobile order tracking app built with **Next.js 14, React, TypeScript, Tailwind CSS, Lucide icons, and Framer Motion**.

The main content is constrained to a **430px phone-like container**, centered on a soft gray canvas on desktop, and full-bleed on real phones.

## Responsive & mobile behavior

- **360px–430px phones**: full-bleed layout, compact paddings/type scale at <380px (`min-[380px]` variants), 44px+ touch targets, no horizontal overflow (`overflow-x-clip`, `min-w-0` + `truncate`/`break-words` everywhere).
- **Safe areas**: respects `env(safe-area-inset-top/bottom)` for notch/home-indicator devices (`viewportFit: "cover"`), toast sits above the home indicator.
- **Desktop**: content stays a clean, centered 430px column (no device frame, no dashboard).
- **Touch comfort**: global `min-height: 44px` on buttons/links for coarse pointers; primary actions use 48px.
- **Reduced motion**: skeleton shimmer disabled under `prefers-reduced-motion`.

## Features

- **Product card** — image, name, order ID, seller, expected delivery
- **Dynamic status card** — 3 states:
  - `Delayed` — orange/red gradient, “Delivery Delayed”, new ETA “Tomorrow, 2:00 PM”, Report Issue
  - `Delivered` — green gradient, “Marked Delivered”, Contact Support + Report Missing Package
  - `No Tracking` — blue gradient, “Preparing Shipment”, “Expected update within 24 hours”, Refresh Tracking
- **Vertical delivery timeline** — Order Confirmed → Processing → Shipped → Out for Delivery → Delivered, with completed (green), current (animated pulse ring), upcoming (gray) states
- **Support card** — Contact Support + Chat with us
- **State switcher** — Delayed / Delivered / No Tracking pill updates the whole screen
- **UX states** — loading skeleton (shimmer), empty state, friendly error state, toast feedback
- Smooth Framer Motion entrance + layout animations, tap/hover micro-interactions

## Tech stack

- Next.js 14.2 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3
- lucide-react icons
- framer-motion animations
- No backend, mock data in `data/orders.ts`

## Installation

```bash
npm install
```

Requires Node 18+ (tested on Node 22).

## Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Resize to ~390px width for the intended mobile view.

## Production build

```bash
npm run build
npm start
```

## Code quality

```bash
npm run lint     # ESLint (next/core-web-vitals)
npm run format   # Prettier + Tailwind class sorting
npx tsc --noEmit # TypeScript strict check
```



## Project structure

```
app/
  layout.tsx      — root layout + metadata
  page.tsx        — mobile container composing all cards
  globals.css     — Tailwind + shimmer/skeleton styles
components/
  Header.tsx, ProductCard.tsx, StatusCard.tsx (+ Delayed/Delivered/NoTracking views)
  Timeline.tsx, SupportCard.tsx, StateSwitcher.tsx
  LoadingSkeleton.tsx, FeedbackStates.tsx, Toast.tsx
data/
  orders.ts       — order + per-state timelines + demo meta
```
