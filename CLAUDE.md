# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

## Architecture

Single-page portfolio for Sdymoondesign. There is **no routing** — all navigation is tab-based React state managed in [src/app/page.js](src/app/page.js).

- `activeTab` state (values: `"all"`, `"posters"`, `"logos"`, `"website"`, `"app"`, `"info"`) is owned by `page.js` and passed down to `Navbar` (highlighting) and `ImageGrid` (filtering).
- `layout.js` is the only Server Component; everything else is `"use client"`.

### Component responsibilities

| Component     | Role                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| `Navbar`      | Sticky header with desktop nav + animated full-screen mobile menu (Framer Motion)   |
| `ImageGrid`   | Filtered masonry grid — separate 3-column desktop layout and 1-column mobile layout |
| `ExpendImage` | Lightbox modal with prev/next navigation and keyboard support (Esc, arrows)         |
| `Info`        | Static about/social page shown when `activeTab === "info"`                          |
| `Footer`      | Static copyright line                                                               |

### Image data

All portfolio images live in `public/Images/{App,Logos,Posters,Website}/`. To add or change images:

1. Update `imageData` in [src/components/ImageGrid.js](src/components/ImageGrid.js) (maps numeric id → `{ category, src }`).
2. Update the desktop column arrays (`desktopCol1/2/3`) and `mobileItems` with the new entry and its `ratio` (`aspect-square`, `aspect-video`, or `aspect-[16/23]`).

The desktop grid uses mathematically pre-balanced aspect ratios so all three columns reach the same total height — preserve this when adding items.

## Stack

- **Next.js 16.2.4** (App Router) · **React 19** · **Tailwind CSS v4** · **Framer Motion 12**
- No TypeScript, no test suite, no database.
- Font: Menlo/Monaco monospace applied via inline `style` (not `next/font`).
