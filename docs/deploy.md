# Deployment Guide: Celestial Tarot

## Option 1: GitHub Pages (Recommended)

### 1. Push to GitHub

```bash
cd /Users/chaosassist/.openclaw/workspace/celestial-tarot-site

# Create repo on GitHub first (alexyuui/celestial-tarot-site)
# Then push:
git remote set-url origin git@github.com:alexyuui/celestial-tarot-site.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to **Settings → Pages** in the repo
2. Under "Build and deployment", select **GitHub Actions**
3. The included `.github/workflows/deploy.yml` will auto-deploy on push

### 3. Site URL
`https://alexyuui.github.io/celestial-tarot-site/`

---

## Option 2: Vercel

```bash
npm i -g vercel
cd celestial-tarot-site
vercel --prod
```

If using Vercel, update `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://celestial-tarot-site.vercel.app',
  base: '/',
});
```

## Option 3: Cloudflare Pages

1. Connect GitHub repo to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`

---

## Post-Deploy Checklist

- [ ] Verify all 12 zodiac pages render correctly
- [ ] Test mobile responsiveness
- [ ] Add YouTube video IDs to `src/data/zodiac.ts` as videos are published
- [ ] Set up custom domain if desired
- [ ] Add Google Analytics or Plausible for tracking
- [ ] Set up actual newsletter backend (ConvertKit, Buttondown, etc.)
- [ ] Add OG images for social sharing

## Future Enhancements

- **SEO**: Add `@astrojs/sitemap` for automatic sitemap generation
- **RSS**: Add `@astrojs/rss` for blog/reading feed
- **CMS**: Integrate Decap CMS or Keystatic for content editing without code
- **YouTube API**: Auto-fetch latest videos instead of manual embed IDs
- **i18n**: Add Chinese/Spanish translations with `@astrojs/i18n`
- **Blog**: Add a blog section for written horoscopes and tarot spreads
- **Analytics**: Integrate Plausible or Umami for privacy-respecting analytics
- **Performance**: Add image optimization with `@astrojs/image`
- **PWA**: Make it installable as a Progressive Web App
