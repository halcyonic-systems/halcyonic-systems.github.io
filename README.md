# Halcyonic Systems Website

**Live**: https://halcyonic.systems (or https://halcyonic-systems.github.io)

Minimal research organization website built with Astro + Tailwind CSS.

## Stack

- **Framework**: [Astro](https://astro.build) (static site generator)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Fonts**: Fraunces (headings) + Inter (body)
- **Hosting**: GitHub Pages
- **Domain**: halcyonic.systems (via Namecheap DNS)

## Structure

```
src/
├── components/
│   ├── Header.astro      # Nav + logo + dark mode toggle
│   ├── Footer.astro      # Copyright + contact links
│   └── ThemeToggle.astro # Dark/light mode switcher
├── layouts/
│   └── BaseLayout.astro  # HTML wrapper, fonts, meta
├── pages/
│   ├── index.astro       # Home - tagline + CTA
│   ├── research.astro    # Project cards (BERT, Bitcoin, Ontologies)
│   ├── writing.astro     # Substack link
│   └── about.astro       # One-liner + contact
├── styles/
│   └── global.css        # Tailwind config, animations, dark mode
public/
├── logo.png              # Kingfisher logo
├── favicon.svg           # Simple favicon
└── CNAME                  # Custom domain config
```

## Development

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # Build to ./dist
```

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically.

Workflow: `.github/workflows/deploy.yml`

## Design Notes

- **Philosophy**: Minimal, depth on click. Homepage is just tagline + CTA.
- **Colors**: Ocean blue gradient background with subtle animation
- **Dark mode**: System preference detection + manual toggle
- **Micro-interactions**: Link underlines, card lifts

## Content Updates

- **Add project**: Edit `src/pages/research.astro`, add to `projects` array
- **Update links**: Edit relevant `.astro` file directly
- **Styling**: `src/styles/global.css` for global, inline Tailwind for components

## Related

- **Main vault**: ~/Desktop/halcyonic/ (research notes, planning docs)
- **Old planning**: halcyonic/operations/website/MIGRATION-PLAN.md
