# WaterEye FX

A dark-themed portfolio website for WaterEye FX — a professional YouTube thumbnail design service. Features floating thumbnail cards, portfolio grid, pricing page, and contact form.

## Run & Operate

- `pnpm --filter @workspace/watereye run dev` — run the frontend (port 20865, set by artifact)
- `pnpm --filter @workspace/api-server run dev` — run the API server (requires `DATABASE_URL`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env for API server: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 20, TypeScript 5.9
- Frontend: React 19 + Vite 7, Tailwind CSS v4, Radix UI, Framer Motion, Wouter (routing), Recharts
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/watereye/` — React + Vite frontend (the public-facing website)
- `artifacts/api-server/` — Express API server
- `lib/db/` — Drizzle ORM schema + migrations
- `lib/api-spec/` — OpenAPI spec (source of truth for API contract)
- `lib/api-client-react/` — Generated React Query hooks from OpenAPI spec
- `lib/api-zod/` — Generated Zod schemas from OpenAPI spec

## Deployment

The frontend is deployed to **https://watereye.vercel.app** via Vercel.
Deployment uses the Vercel REST API — no CLI required.
Build: `PORT=3000 BASE_PATH=/ pnpm --filter @workspace/watereye run build`
Output: `artifacts/watereye/dist/public/`

## Architecture decisions

- `BASE_PATH` and `PORT` env vars are required by vite.config.ts at module load time — set by the artifact's `[services.env]` in artifact.toml for Replit, and as build env vars for Vercel.
- Wouter router uses `import.meta.env.BASE_URL` as its base so routing works under any path prefix.
- SPA routing: all 404s fall through to `index.html` (configured in both artifact.toml and Vercel rewrites).

## Product

WaterEye FX is a portfolio/service site for a YouTube thumbnail designer. Pages: Home (hero + floating cards), Portfolio, Services (pricing), Contact.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- vite.config.ts throws at startup if `PORT` or `BASE_PATH` env vars are missing — always ensure both are set before running dev or build.
- Vercel CLI cannot be installed in this environment (security policy blocks the `tar` package it depends on). Use the Vercel REST API directly instead.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
