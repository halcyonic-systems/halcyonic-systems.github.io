# Substack API Integration

`ideas.halcyonic.systems` exposes an undocumented JSON API. Use it to render a Writing section on `halcyonic.systems` without duplicating content.

## Endpoints

| Endpoint | Returns |
|----------|---------|
| `/api/v1/archive?sort=new&limit=50&offset=0` | Paginated post list (title, slug, post_date, cover_image, subtitle, section_name, description, audience, reactions) |
| `/api/v1/posts/{slug}` | Full post including `body_html` |
| `/api/v1/publication` | Publication metadata |
| `/feed` | RSS |

## Architecture

- `ideas.halcyonic.systems` = Substack (writing, email, subscriptions, comments)
- `halcyonic.systems` = custom Astro frontend, pulls content at build time

## Recommended Approach

Start light: card grid on halcyonic.systems linking out to Substack for full posts. Add full-body rendering later if typographic control matters.

## Implementation

- Thin wrapper at `src/lib/substack.ts` — one file to update if API changes
- Fetch at Astro build time via `getStaticPaths` / page-level fetches
- Rebuild triggered by Vercel/Netlify cron or deploy hook when new posts publish
- Allow image hosts in Astro config: `substackcdn.com`, `substack-post-media.s3.amazonaws.com`

## Caveats

- API is unofficial and undocumented — can change without notice
- Paid content returns truncated body
- Canonical URLs: start with canonical pointing back at Substack, flip later if custom site becomes the primary reading experience
