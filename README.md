# Priyanshu Verma Portfolio (portfolio-v1)

Single-page AI Engineer portfolio built with Next.js App Router, TypeScript strict mode, and TailwindCSS.

## Stack

- Next.js 15 (App Router, static rendering)
- TypeScript (strict)
- TailwindCSS
- Lucide React

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build & Checks

```bash
npm run lint
npm run build
```

## Project Structure

- `src/app/layout.tsx` metadata, global fonts, app shell
- `src/app/page.tsx` section composition
- `src/app/globals.css` reset, tokens, crafty button styles
- `src/components/atoms/*` UI primitives
- `src/components/sections/*` page sections
- `src/data/content.ts` single source of truth
- `src/types/index.ts` typed content models
