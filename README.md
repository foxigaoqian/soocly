# Soocly Prep

[Soocly Prep](https://soocly.com/) is a free trade-certification practice platform. The first exam track covers EPA Section 608, with section-specific practice tests, study guides, flashcards, and reference pages for HVAC students and technicians.

## Live resources

- [Free EPA 608 practice test](https://soocly.com/)
- [EPA 608 study guide](https://soocly.com/epa-608-study-guide)
- [EPA 608 test questions and answers](https://soocly.com/epa-608-test-questions-and-answers)
- [EPA 608 Universal practice test](https://soocly.com/epa-608-universal-practice-test)

## Stack

- Next.js App Router
- TypeScript
- Cloudflare Workers Static Assets
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
npm run deploy:dry
```

## Cloudflare

The site uses Next.js static export. `next build` writes the complete site to `out/`, and Wrangler uploads that directory through Workers Static Assets. No site files are stored in Workers KV.

Connect this repository to Workers Builds and use `npm run deploy` as the deploy command. Keep the `workers.dev` address until `soocly.com` is deliberately added as a Worker custom domain.

Question content is original practice material and must complete expert review before public release. Soocly Prep is not affiliated with or endorsed by the U.S. Environmental Protection Agency.
