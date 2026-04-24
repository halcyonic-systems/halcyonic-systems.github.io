# Halcyonic Site Roadmap

## Next

- [ ] Mobile responsive testing — verify hero arrow, Work flagships, About triangle at small viewports
- [ ] Merge `redesign/frost-dual-zone` → `main` when ready to ship

## Next (W18 review session)

- [ ] **Dark mode toggle**: Bring back a light/dark toggle using a Deep Night + Ocean blend palette (~`#0c1929` bg, readable accents). Use `brand/logo-exploration.html` palette explorer to pick the exact values. Implementation: CSS variable swap on `.dark` class, toggle in footer. Design decision first, code second.

## Future

- [ ] **Triangle-as-nav**: When the Work page grows enough to organize by Labs/Systems/Ventures, wire the Commuting Triangle vertices as navigation links to those sections. The signal to build this is when someone scrolls the Work page and feels lost — right now 10 items don't justify the structure.
- [ ] **Ocean palette salvage**: The Ocean scheme felt close but not right. Revisit if a dark mode toggle returns.
- [ ] **Thesis card data preview**: The U.S. Trade Network flagship card should telegraph "data environment" — consider a Plotly screenshot or darker card bg to signal the live app behind the link.
