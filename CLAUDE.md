# CLAUDE.md - Halcyonic Website

## Quick Context

This is the halcyonic.systems website - a minimal Astro + Tailwind site for Shingai's research organization.

**Live**: https://halcyonic-systems.github.io (custom domain: halcyonic.systems)

## Key Files

| File | Purpose |
|------|---------|
| `src/pages/research.astro` | Project cards - edit `projects` array to add/modify |
| `src/pages/glossary.astro` | Systems science glossary - grouped foundational terms |
| `src/pages/index.astro` | Homepage hero + dual CTAs |
| `src/pages/writing.astro` | Writing page - add essays here |
| `src/pages/about.astro` | About page - personal + org info |
| `src/styles/global.css` | Colors, animations, dark mode CSS |
| `src/components/Header.astro` | Navigation + dark mode toggle |

## Common Tasks

### Add a new project
Edit `src/pages/research.astro`:
```js
const projects = [
  {
    title: 'Project Name',
    description: 'One-liner description.',
    link: 'https://...',
    linkText: 'View project',
    icon: 'X',  // Single character
    gradient: 'from-ocean-500 to-ocean-600',  // Tailwind gradient
    border: 'border-ocean-100 hover:border-ocean-300',
    hover: 'group-hover:text-ocean-600',
  },
  // ...existing projects
];
```

### Change colors
Edit `src/styles/global.css` - colors defined in `@theme` block.

### Update content
Edit the relevant `.astro` file in `src/pages/`.

## Design Principles

1. **Minimal** - Less is more. Homepage is just tagline + one CTA.
2. **Depth on click** - Reveal complexity through navigation, not upfront.
3. **Show work** - Focus on concrete outputs, not theoretical justifications.
4. **Easy to maintain** - No complex build, just edit and push.

## Dev Commands

```bash
npm run dev     # Start dev server at localhost:4321
npm run build   # Build for production
```

## Deployment

Push to `main` → GitHub Actions auto-deploys to GitHub Pages.

## Future Work

### Ready to add
- **Research areas** (Cryptoeconomics, Political Economy, Neuromorphics) - commented out in `research.astro`, restore when ready to show broader scope
- **Interstate Trade Viz** - lives at ~/Desktop/interstate-trade-viz

### Content to create
- **Writing/essays** - page structure ready, needs content
- **Glossary expansion** - add terms as feedback comes in; grouped structure scales well

### Reference material
- **Mobus chapters** - ~/Desktop/halcyonic/operations/systems-science/system-language/mobus-chapters/ (used for glossary alignment)
- **Halcyonic glossary** - ~/Desktop/halcyonic/glossary.md (comprehensive source)

## Contact Info

- Email: shingai@halcyonic.systems
- GitHub: github.com/halcyonic-systems
- Substack: ideas.halcyonic.systems
