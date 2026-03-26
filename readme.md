# Frontend Assessment - Completed

A responsive web application built with **React** and **Tailwind CSS**, featuring two exercises that follow the technical brief.

## Introduction

Thanks for taking the time to review this submission.

---

## Live Demo

| Route | URL |
| --- | --- |
| Home | https://frontend-assessment.lethithuphuong03122004.workers.dev/ |
| Exercise 1 | https://frontend-assessment.lethithuphuong03122004.workers.dev/exercise1 |
| Exercise 2 | https://frontend-assessment.lethithuphuong03122004.workers.dev/exercise2 |

Local routes: `http://localhost:5173`, `/exercise1`, `/exercise2`

---

## Exercises Overview

### Exercise 1

Build a responsive page based on the provided design.

**Design:** [FE-Test (Figma)](https://www.figma.com/design/OGS3UnHSQ22l0rXXsY7wnU/FE-Test?node-id=0-1&p=f&m=dev)

**Features**

- ✅ Match design closely (layout, spacing, typography, imagery)
- ✅ Fully responsive layout (desktop and mobile)
- ✅ Hero with desktop/mobile images, arrows, dots, and autoplay
- ✅ Product grid with reusable card component

### Exercise 2

Read `src/data/data.json` and display content as tabs on desktop and accordion on mobile.

**Features**

- ✅ Tabs on desktop (`>= 768px`)
- ✅ Accordion on mobile (`< 768px`)
- ✅ Only one tab/accordion open at a time
- ✅ First item open on initial load
- ✅ Clicking active accordion item closes it (mobile)
- ✅ Smooth transitions/animations for better UX

---

## Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (or yarn/pnpm)

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Tech Stack

| Category | Value |
| --- | --- |
| Framework | React 19 |
| Routing | React Router |
| Styling | Tailwind CSS v4 + SCSS |
| Build Tool | Vite 7 |
| Deployment | Cloudflare Workers |

---

## Key Features

- Responsive design with clear breakpoints
- Component-based architecture for readability and maintainability
- Reusable UI blocks (`HeroSection`, `ProductGridSection`, `TabList`, `AccordionList`, `ProductCard`, `SafeContent`)
- Accessibility improvements (semantic elements + ARIA where needed)
- Data-driven rendering from JSON/config files

---

## Project Structure

- `src/` — Main source code
- `src/assets/` — Images and other static assets
- `src/pages/` — Page components for each route
- `src/components/` — Reusable React components
- `src/data/` — Data source for Exercise 1, Exercise 2

---

## Bonus

**Question:** Why does `('b' + 'a' + + 'a' + 'a').toLowerCase()` result in `banana`?

**Answer:** This is JavaScript type coercion combined with unary plus.

```js
('b' + 'a' + + 'a' + 'a').toLowerCase()
// 'b' + 'a'   -> 'ba'
// + 'a'       -> NaN
// 'ba' + NaN  -> 'baNaN'
// 'baNaN' + 'a' -> 'baNaNa'
// toLowerCase() -> 'banana'
```

The unary `+` tries to convert `'a'` to a number, returns `NaN`, and then string concatenation produces `'baNaNa'`, which becomes `'banana'` after lowercase conversion.
