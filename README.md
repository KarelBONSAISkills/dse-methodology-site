# DSE Methodology — interactive web page

Vendor-neutral showcase of Digital Staffing Experts methodology for **customers**, **ATS technology providers**, and **integrators**.  
Built on the [DSE Design System](~/.cursor/skills/dse-design-system/SKILL.md). English. Offline-capable.

Future use: partner meetings, customer conversations, and as source material for the new website. PDF export later via [canvas-presentation-export](~/.cursor/skills/canvas-presentation-export/SKILL.md).

## Open locally

1. Copy this folder to any device.
2. Open `index.html` in Chrome or Safari.
3. No server or build step required.

## Share online (GitHub Pages)

**Live link (share with Pieterjan):**  
**https://karelbonsaiskills.github.io/dse-methodology-site/**

The public site lives in repo [dse-methodology-site](https://github.com/KarelBONSAISkills/dse-methodology-site).  
Source docs stay in the private [dse-methodology](https://github.com/KarelBONSAISkills/dse-methodology) repo.

After editing this folder, publish updates:

```bash
bash scripts/publish-methodology-site.sh
```

> GitHub Free does not support Pages on **private** repos — that is why the live site uses a separate public repo with only this page (no internal docs).

## Files

| File | Role |
|------|------|
| `index.html` | Page structure (6 sections + contact) |
| `script.js` | All interactivity and content data |
| `tokens.css` | DSE design tokens (synced from design system) |
| `components.css` | DSE component classes |
| `page.css` | Page-specific layout |
| `brand.json` | Brand config reference |
| `assets/` | Logos, bird icons (PNG + SVG) |

## Page sections

1. **Problems** — tabs: Customer · ATS provider · Integrator  
2. **Project cycle** — classic ATS implementation timeline (go-live = halfway)  
3. **Our role** — objective centre triangle + business/IT bridge  
4. **Value** — outcomes per audience  
5. **Methodology** — Scan · 7-step selection · Architecture · PM · Adoption  
6. **References** — filterable table (Notion DSE Projects + portfolio)

## Maintain

When brand tokens change: copy from `~/.cursor/skills/dse-design-system/`:

```bash
cp ~/.cursor/skills/dse-design-system/tokens.css .
cp ~/.cursor/skills/dse-design-system/components.css .
cp ~/.cursor/skills/dse-design-system/brand.json .
cp -r ~/.cursor/skills/dse-design-system/assets/* ./assets/
```

When projects change: update `PROJECTS` in `script.js` from Notion **DSE Projects** database.

Resource index: `docs/partner-methodology/resource-index.md`
