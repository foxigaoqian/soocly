# Soocly Prep

Soocly Prep is a trade certification practice platform. The first exam is EPA Section 608.

## Stack

- Next.js App Router
- TypeScript
- Cloudflare Workers through `@opennextjs/cloudflare`
- Static JSON seed question bank for the MVP

## Development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run typecheck
npm run build
npm run build:worker
```

## Cloudflare

Connect this repository to Workers Builds and use `npm run deploy` as the deploy command. Add `soocly.com` as the Worker custom domain after the first successful deployment.

Question content is original practice material and must complete expert review before public release. Soocly Prep is not affiliated with or endorsed by the U.S. Environmental Protection Agency.
