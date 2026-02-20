# SEO & Lovable Cleanup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace all Lovable placeholder meta tags with Vibe Coders Croatia branding, add Open Graph/Twitter cards, structured data, sitemap, and web manifest.

**Architecture:** Direct edits to `index.html` for meta tags, favicon links, and JSON-LD. New static files in `public/` for sitemap and web manifest. Add sitemap reference to `robots.txt`. Image assets already generated.

**Tech Stack:** Static HTML meta tags, JSON-LD structured data, XML sitemap, Web App Manifest

---

### Task 1: Create site.webmanifest

**Files:**
- Create: `public/site.webmanifest`

**Step 1: Create the manifest file**

```json
{
  "name": "Vibe Coders Croatia",
  "short_name": "Vibe Coders",
  "description": "Vibe Coders Croatia — zajednica programera u Hrvatskoj. Meetupovi, open-source projekti i networking.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1a1a2e",
  "icons": [
    {
      "src": "/favicon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Step 2: Commit**

```bash
git add public/site.webmanifest
git commit -m "feat: add web app manifest with Vibe Coders branding"
```

---

### Task 2: Create sitemap.xml

**Files:**
- Create: `public/sitemap.xml`
- Modify: `public/robots.txt` (append sitemap reference)

**Step 1: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://vibecoders.hr/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**Step 2: Add sitemap reference to robots.txt**

Append this line at the end of `public/robots.txt`:

```
Sitemap: https://vibecoders.hr/sitemap.xml
```

**Step 3: Commit**

```bash
git add public/sitemap.xml public/robots.txt
git commit -m "feat: add sitemap.xml and reference in robots.txt"
```

---

### Task 3: Rewrite index.html — meta tags, OG, Twitter, favicons, JSON-LD

**Files:**
- Modify: `index.html` (the root file, all 26 lines)

**Step 1: Replace the entire `index.html` with this content**

```html
<!doctype html>
<html lang="hr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Vibe Coders Croatia</title>
    <meta name="description" content="Vibe Coders Croatia — zajednica programera u Hrvatskoj. Meetupovi, open-source projekti i networking." />
    <meta name="author" content="Vibe Coders Croatia" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://vibecoders.hr/" />

    <!-- Open Graph -->
    <meta property="og:title" content="Vibe Coders Croatia" />
    <meta property="og:description" content="Vibe Coders Croatia — zajednica programera u Hrvatskoj. Meetupovi, open-source projekti i networking." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vibecoders.hr/" />
    <meta property="og:image" content="https://vibecoders.hr/og-image.png" />
    <meta property="og:locale" content="hr_HR" />
    <meta property="og:site_name" content="Vibe Coders Croatia" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Vibe Coders Croatia" />
    <meta name="twitter:description" content="Vibe Coders Croatia — zajednica programera u Hrvatskoj. Meetupovi, open-source projekti i networking." />
    <meta name="twitter:image" content="https://vibecoders.hr/og-image.png" />

    <!-- Favicons -->
    <link rel="icon" href="/favicon.ico" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Vibe Coders Croatia",
      "url": "https://vibecoders.hr",
      "logo": "https://vibecoders.hr/favicon-512.png",
      "description": "Vibe Coders Croatia — zajednica programera u Hrvatskoj. Meetupovi, open-source projekti i networking.",
      "nonprofitStatus": "NonprofitType",
      "sameAs": [
        "https://discord.gg/mTbs9mNv",
        "https://www.meetup.com/"
      ]
    }
    </script>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Key changes from original:
- `lang="en"` → `lang="hr"`
- Removed all "Lovable" references (title, description, author, og tags, twitter:site)
- Removed both TODO comments
- Removed external Lovable OG image URLs
- Added: canonical URL, robots meta, og:url, og:locale, og:site_name
- Added: twitter:title, twitter:description with proper content
- Added: all favicon link tags
- Added: manifest link
- Added: JSON-LD structured data block

**Step 2: Verify the build works**

```bash
npx vite build
```

Expected: Build succeeds with no errors.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: replace Lovable placeholder SEO with Vibe Coders Croatia branding

- Update all meta tags (title, description, author, robots)
- Add Open Graph tags (title, description, type, url, image, locale, site_name)
- Add Twitter Card tags (card, title, description, image)
- Add favicon links (ico, png, apple-touch-icon, manifest)
- Add JSON-LD Organization structured data
- Set lang to hr, add canonical URL
- Remove all Lovable references and TODO comments"
```

---

### Task 4: Commit generated image assets

**Files:**
- Stage: `public/og-image.png`, `public/favicon.ico`, `public/apple-touch-icon.png`, `public/favicon-192.png`, `public/favicon-512.png`, `public/favicon-32x32.png`

**Step 1: Commit all generated image assets**

```bash
git add public/og-image.png public/favicon.ico public/apple-touch-icon.png public/favicon-192.png public/favicon-512.png public/favicon-32x32.png
git commit -m "assets: add generated favicon set and OG image from logo"
```

---

### Task 5: Verify everything works end-to-end

**Step 1: Run the dev server**

```bash
npx vite --open
```

**Step 2: Check in browser**
- Verify favicon appears in browser tab
- View page source — confirm all meta tags are correct, no Lovable references remain
- Check JSON-LD is present in source

**Step 3: Search for any remaining Lovable references in meta/HTML**

```bash
grep -ri "lovable" index.html
```

Expected: No matches (lovable-tagger in vite.config.ts and package.json are intentionally kept).
