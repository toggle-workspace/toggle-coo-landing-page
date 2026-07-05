# Payload CMS + shadcn/ui Installation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Install and wire up Payload CMS v3 (Neon/PostgreSQL) and shadcn/ui into the existing Next.js 16 + Tailwind v4 project.

**Architecture:** Payload runs as a Next.js plugin via `withPayload`, serving the admin UI at `/admin` and REST API at `/api`. Collections live in `src/collections/`. shadcn/ui is initialized via CLI and drops `components.json` + `src/lib/utils.ts`.

**Tech Stack:** Next.js 16.2.10, Payload v3, `@payloadcms/db-postgres` (Neon), `@payloadcms/richtext-lexical`, shadcn/ui, Tailwind v4, Bun, TypeScript

## Global Constraints

- Package manager: Bun (`bun add`, not `npm install`)
- TypeScript strict mode: on
- Path alias `@/*` maps to `./src/*`
- Tailwind v4 already installed — do not reinstall or reconfigure it
- Next.js App Router only — no Pages Router

---

### Task 1: Install Payload packages and env vars

**Files:**
- Modify: `package.json` (via bun add)
- Create: `.env.local`

**Interfaces:**
- Produces: `payload`, `@payloadcms/next`, `@payloadcms/db-postgres`, `@payloadcms/richtext-lexical` available in node_modules

- [ ] **Step 1: Install Payload packages**

```bash
bun add payload @payloadcms/next @payloadcms/db-postgres @payloadcms/richtext-lexical
```

Expected: packages added to `dependencies` in `package.json`, no errors.

- [ ] **Step 2: Create `.env.local` with required vars**

Create `.env.local` at project root:

```env
DATABASE_URI=your-neon-connection-string-here
PAYLOAD_SECRET=replace-with-a-long-random-string
```

Replace `your-neon-connection-string-here` with the actual Neon connection string (format: `postgresql://user:password@host/dbname?sslmode=require`).
Replace `PAYLOAD_SECRET` value with any long random string (e.g. run `openssl rand -base64 32` to generate one).

- [ ] **Step 3: Verify install**

```bash
bun run dev
```

Expected: dev server starts (it may have errors about missing payload config — that's fine, we haven't added it yet). Kill after confirming no package resolution errors.

---

### Task 2: Create the Users collection

**Files:**
- Create: `src/collections/Users.ts`

**Interfaces:**
- Produces: `Users` (`CollectionConfig`) exported from `src/collections/Users.ts`, consumed by `payload.config.ts` in Task 3

- [ ] **Step 1: Create `src/collections/Users.ts`**

```ts
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [],
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
bun run build 2>&1 | grep -i "users" || echo "no TS errors in Users"
```

(Build will fail for other reasons at this point — just check there are no type errors in `Users.ts`.)

---

### Task 3: Create `payload.config.ts`

**Files:**
- Create: `payload.config.ts` (project root)

**Interfaces:**
- Consumes: `Users` from `src/collections/Users.ts`
- Produces: default export `Config` consumed by `withPayload` in Task 4 and all `getPayload({ config })` calls

- [ ] **Step 1: Create `payload.config.ts`**

```ts
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Users } from '@/collections/Users'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
```

---

### Task 4: Wire Payload into Next.js config and tsconfig

**Files:**
- Modify: `next.config.ts`
- Modify: `tsconfig.json`

**Interfaces:**
- Consumes: `payload.config.ts` from Task 3
- Produces: `@payload-config` alias resolves to `payload.config.ts`; `withPayload` wraps Next.js config

- [ ] **Step 1: Update `next.config.ts`**

Replace the full contents of `next.config.ts` with:

```ts
import { withPayload } from '@payloadcms/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}

export default withPayload(nextConfig)
```

- [ ] **Step 2: Add `@payload-config` alias to `tsconfig.json`**

In the `paths` section of `tsconfig.json`, add:

```json
"@payload-config": ["./payload.config.ts"]
```

So the full `paths` block becomes:

```json
"paths": {
  "@/*": ["./src/*"],
  "@payload-config": ["./payload.config.ts"]
}
```

---

### Task 5: Add Payload admin and API routes

**Files:**
- Create: `src/app/(payload)/admin/[[...segments]]/page.tsx`
- Create: `src/app/(payload)/admin/[[...segments]]/not-found.tsx`
- Create: `src/app/(payload)/api/[...slug]/route.ts`

**Interfaces:**
- Consumes: `@payloadcms/next/views` and `@payloadcms/next/routes`
- Produces: admin UI at `/admin`, REST API at `/api`

- [ ] **Step 1: Create admin page**

Create `src/app/(payload)/admin/[[...segments]]/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@payload-config'
import { importMap } from '../importMap'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config, params, searchParams, importMap })

export default Page
```

- [ ] **Step 2: Create not-found page**

Create `src/app/(payload)/admin/[[...segments]]/not-found.tsx`:

```tsx
import { NotFoundPage } from '@payloadcms/next/views'
import config from '@payload-config'
import { importMap } from '../importMap'

const NotFound = () => NotFoundPage({ config, importMap })

export default NotFound
```

- [ ] **Step 3: Create importMap**

Create `src/app/(payload)/admin/importMap.ts`:

```ts
export const importMap = {}
```

- [ ] **Step 4: Create API route**

Create `src/app/(payload)/api/[...slug]/route.ts`:

```ts
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import config from '@payload-config'

export const GET = REST_GET(config)
export const POST = REST_POST(config)
export const DELETE = REST_DELETE(config)
export const PATCH = REST_PATCH(config)
export const PUT = REST_PUT(config)
export const OPTIONS = REST_OPTIONS(config)
```

- [ ] **Step 5: Verify dev server starts**

```bash
bun run dev
```

Expected: dev server starts, navigate to `http://localhost:3000/admin` — you should see the Payload admin UI asking you to create a first user. Kill after confirming.

---

### Task 6: Install shadcn/ui

**Files:**
- Creates: `components.json`, `src/lib/utils.ts` (via CLI)

**Interfaces:**
- Produces: shadcn/ui component system ready; components installable via `npx shadcn@latest add <component>`

- [ ] **Step 1: Run shadcn init**

```bash
npx shadcn@latest init
```

When prompted:
- Style: **Default** (or New York — your preference)
- Base color: **Neutral** (or your preference)
- CSS variables: **Yes**

The CLI detects Tailwind v4 automatically and configures accordingly.

- [ ] **Step 2: Verify `components.json` was created**

```bash
cat components.json
```

Expected: JSON file with `style`, `rsc`, `tsx`, `tailwind`, `aliases` fields.

- [ ] **Step 3: Verify `src/lib/utils.ts` was created**

```bash
cat src/lib/utils.ts
```

Expected: file containing `cn()` utility using `clsx` + `tailwind-merge`.

- [ ] **Step 4: Final dev server check**

```bash
bun run dev
```

Expected: server starts with no errors. Visit `http://localhost:3000/admin` — Payload admin loads. Visit `http://localhost:3000` — main page loads. No console errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: install Payload CMS v3 (Neon/PostgreSQL) and shadcn/ui"
```
