# Research: Celestial Tarot Site

## ClawHub Skills Survey

- **web-deploy-github** — A ClawHub skill for creating and deploying single-page static websites to GitHub Pages. Could be useful for simple deployments but limited to single-page apps.
- **ClawHub** (clawhub.ai) — The official skill registry for OpenClaw agents. Provides CLI-based skill install/management.

For a multi-page content site with 12+ zodiac pages, we need a proper static site generator rather than a single-page deploy skill.

## Framework Comparison

| Criteria | Astro | Next.js | Hugo |
|---|---|---|---|
| **Static Output** | ✅ First-class SSG | ✅ SSG mode available | ✅ Pure SSG |
| **Performance** | ⭐ Ships zero JS by default | ❌ Ships React runtime | ⭐ Zero JS |
| **Content Focus** | ⭐ Built for content sites | Overkill for content | ⭐ Built for content |
| **Component Support** | React/Vue/Svelte/vanilla | React only | Go templates |
| **YouTube Embeds** | Easy with components | Easy | Manual HTML |
| **Learning Curve** | Low | Medium | Medium (Go templates) |
| **Build Speed** | Fast | Slower | ⭐ Fastest |
| **Ecosystem** | Growing, modern | Massive | Mature |
| **Deployment** | Any static host | Vercel preferred | Any static host |
| **Island Architecture** | ✅ Partial hydration | ❌ Full hydration | N/A |

## Recommendation: **Astro**

**Why Astro wins for Celestial Tarot:**

1. **Zero JS by default** — Perfect for a content/media site. Pages load instantly.
2. **Content Collections** — Built-in system for managing zodiac sign content as structured data.
3. **Island Architecture** — Only hydrate interactive bits (newsletter form) while keeping everything else static.
4. **Component flexibility** — Can use plain HTML/CSS or any framework component.
5. **Excellent static hosting support** — Works on Vercel, Cloudflare Pages, GitHub Pages, Netlify out of the box.
6. **Modern DX** — File-based routing, Markdown/MDX support, built-in image optimization.

Next.js is overkill (ships unnecessary React runtime for what's essentially a brochure site). Hugo is fast but Go templates are less ergonomic for embedding YouTube videos and building interactive newsletter forms.
