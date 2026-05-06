# Icon Palette Domain Mappings

Design spec for augmenting `/icons` with transdisciplinary domain examples. Icons are domain-neutral by design — the feature shows how the same icon applies across biology, software, economics, social systems.

## Tiers

1. **Tooltip examples** (low effort) — add "Across domains:" to each tooltip with 3 instantiations
2. **Domain filter chips** (medium) — clickable filters that swap description text per domain
3. **Translation layer** (high) — page-level domain context transforms all vocabulary

## Data Structure

```javascript
const iconMappings = {
  subsystem: {
    generic: "Decomposition unit",
    biology: "Organelle, organ, organism",
    software: "Microservice, module, component",
    economics: "Firm, department, market sector"
  },
  source: {
    generic: "External input provider",
    biology: "Sunlight, nutrients, oxygen",
    software: "API endpoint, user input, database",
    economics: "Revenue stream, investment, labor"
  },
  // ... extend for all icons
};
```

## Domains

Biology, Software, Economics, Social as initial set. Physics/Engineering as possible 5th.

## Origin

Consolidated from misplaced tasknote + session file (2026-01-10). Original explored full implementation across all three tiers.
