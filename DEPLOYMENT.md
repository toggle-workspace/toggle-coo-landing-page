# Deployment (Vercel)

## 1. Account & link

```bash
vercel login          # pick the correct account
vercel whoami          # confirm it's the right one
vercel link             # link this repo to a Vercel project
```

## 2. Environment variables

Set these on Vercel (Dashboard → Project → Settings → Environment Variables,
or `vercel env add <NAME>`), for both Preview and Production:

| Var | Value | Notes |
|---|---|---|
| `DATABASE_URI` | Neon Postgres connection string | same one in local `.env` |
| `PAYLOAD_SECRET` | random secret string | same one in local `.env` |
| `BLOB_READ_WRITE_TOKEN` | auto-injected | set in step 3, don't add manually |

## 3. Vercel Blob (image storage)

```bash
vercel blob store add
```

Link the store to this project — Vercel auto-injects `BLOB_READ_WRITE_TOKEN`
into the project's env vars. Media uploads (`media` collection) are stored
here via `@payloadcms/storage-vercel-blob` (see `payload.config.ts`).

## 4. Deploy

```bash
vercel              # preview deploy — safe, isolated URL
vercel --prod        # production deploy — only after verifying preview
```

## 5. Verify

```bash
vercel ls                          # recent deployments
vercel inspect <deployment-url>     # build/runtime details
vercel logs <deployment-url>        # build or runtime logs
```

Check:
- Site loads at the deployment URL.
- `/admin` login works (uses `DATABASE_URI` + `PAYLOAD_SECRET`).
- Uploading an image in `/admin` succeeds (uses `BLOB_READ_WRITE_TOKEN`).

## Notes

- `push: process.env.NODE_ENV !== 'production'` in `payload.config.ts` means
  schema changes auto-push in dev but need real migrations in production —
  run `npx payload migrate:create <name>` then `npx payload migrate` against
  `DATABASE_URI` if you change collections/fields before deploying, or the
  build will fail with `relation "..." does not exist`.
- On Node 22+/23+, `payload`'s default tsx loader can crash with
  `ERR_REQUIRE_ASYNC_MODULE` when loading `payload.config.ts`. Pass
  `--use-swc` to `payload migrate*` commands to work around it.
