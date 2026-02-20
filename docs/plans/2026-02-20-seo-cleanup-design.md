# SEO & Lovable Cleanup Design

**Date:** 2026-02-20
**Site:** https://vibecoders.hr
**Type:** Non-profit community organization

## Context

Vibe Coders Croatia is a React + Vite + Tailwind SPA with all content in Croatian. The site was scaffolded with Lovable and retains all placeholder meta tags ("Lovable App", external Lovable OG image, `@Lovable` Twitter handle). There is no structured data, no sitemap, no web manifest, and no custom OG image.

## Scope

### 1. index.html — Meta Tags Overhaul

Replace all Lovable placeholders:

- `<html lang="hr">` (was `en`)
- `<title>Vibe Coders Croatia</title>`
- `<meta name="description">` — "Vibe Coders Croatia — zajednica programera u Hrvatskoj. Meetupovi, open-source projekti i networking."
- `<meta name="author" content="Vibe Coders Croatia">`
- `<link rel="canonical" href="https://vibecoders.hr/">`
- `<meta name="robots" content="index, follow">`
- Remove TODO comments

### 2. Open Graph Tags

- `og:title` = "Vibe Coders Croatia"
- `og:description` = same as meta description
- `og:type` = "website"
- `og:url` = "https://vibecoders.hr/"
- `og:image` = "https://vibecoders.hr/og-image.png" (1200x630 generated from social.png)
- `og:locale` = "hr_HR"
- `og:site_name` = "Vibe Coders Croatia"

### 3. Twitter Card Tags

- `twitter:card` = "summary_large_image"
- `twitter:title` = "Vibe Coders Croatia"
- `twitter:description` = same as meta description
- `twitter:image` = "https://vibecoders.hr/og-image.png"
- Remove `twitter:site` (@Lovable)

### 4. Favicon Links in `<head>`

- `<link rel="icon" href="/favicon.ico" sizes="32x32">`
- `<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">`
- `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`
- `<link rel="manifest" href="/site.webmanifest">`

### 5. New Files in `/public/`

Already generated:
- `og-image.png` (1200x630 from social.png)
- `favicon.ico` (16x16, 32x32, 48x48)
- `apple-touch-icon.png` (180x180)
- `favicon-192.png` (192x192)
- `favicon-512.png` (512x512)
- `favicon-32x32.png` (32x32)

To create:
- `site.webmanifest` — app name, icons, theme color (#1a1a2e)
- `sitemap.xml` — single URL entry for https://vibecoders.hr/

### 6. JSON-LD Structured Data

`<script type="application/ld+json">` with:
- `@type`: "Organization" (with NonProfit indicator)
- `name`: "Vibe Coders Croatia"
- `url`: "https://vibecoders.hr"
- `logo`: icon URL
- `description`: Croatian description
- `sameAs`: [Discord, GitHub, LinkedIn, Meetup links from the site]

### 7. What Gets Removed

- All "Lovable App" / "Lovable Generated Project" / "@Lovable" from meta tags
- External Lovable OG image URL (lovable.dev/opengraph-image-p98pqg.png)
- TODO comments in index.html

### 8. What Stays Untouched

- `.lovable/` directory
- `lovable-tagger` in package.json and vite.config.ts
- `robots.txt` (already correct)
- All existing component code
