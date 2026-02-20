# Croatian Translation Design — Vibe Coders Croatia

## Decision Summary

- **Language:** Croatian only (no language switcher)
- **Approach:** Direct in-component string replacement
- **Tone:** Professional Croatian with light positive/chill energy
- **Audience:** Developers AND product builders — inclusive throughout
- **Tech terms:** Stay in English (React, Docker, Open Source, etc.)
- **Project/event/sponsor names:** Stay in English

## Audience Principle

The website serves **builders** — not just developers. Product builders, designers who code, indie hackers, and anyone who creates digital products. Every section must reflect this. Use "builderi i koderi", "zajednica", "kreatori" — never narrow to just "developeri".

## Files to Modify

1. `src/components/Navbar.tsx` — nav link labels
2. `src/components/HeroSection.tsx` — taglines, stats labels, CTA buttons, code block comments
3. `src/components/AboutSection.tsx` — badge, headline, description, value cards
4. `src/components/ProjectsSection.tsx` — badge, headline, project descriptions
5. `src/components/EventsSection.tsx` — badge, headline, event descriptions
6. `src/components/SponsorsSection.tsx` — badge, headline, description
7. `src/components/JoinSection.tsx` — badge, headline, channel descriptions, form labels, newsletter copy
8. `src/components/Footer.tsx` — brand description, nav links, legal copy
9. `src/pages/NotFound.tsx` — 404 message

## What Stays in English

- Tech stack names (React, TypeScript, Docker, PostgreSQL, etc.)
- Project names (CroStack CLI, Adriatic UI, etc.)
- Event proper nouns
- Sponsor/partner names
- Platform names (Discord, GitHub, LinkedIn, X)
- Email addresses, URLs
- Code syntax in the hero code block

## Tone Guide

**Voice:** Warm, positive, welcoming. Like a chill friend who's genuinely excited about what the community is building. Not corporate, not try-hard slang.

**Do:**
- Use "ti" (informal you) — the community is casual
- Keep sentences short and punchy
- Let enthusiasm come through naturally
- Reference building/creating, not just coding

**Don't:**
- Overuse surf/beach metaphors — just a light sprinkle
- Sound like a government website or corporate brochure
- Narrow the audience to just "programmers" or "developeri"

## Section-by-Section Translation Direction

### Navbar
- "About" → "O nama"
- "Projects" → "Projekti"
- Other nav items translated to Croatian equivalents

### Hero Section

**Typewriter taglines (fresh, not translations):**
1. "Gdje kod postaje zajednica" — Where code becomes community
2. "Kodiraj, gradi, dijeli" — Code, build, share
3. "Bez gatekeepinga, bez granica" — No gatekeeping, no limits
4. "Otvoreni kod, otvoreni ljudi" — Open code, open people
5. "Tvoj sljedeći projekt počinje ovdje" — Your next project starts here

**Stats labels:** Translate "Members", "Events", "Cities", "Projects" to Croatian

**CTA buttons:** "Pridruži se zajednici" / "Pogledaj eventove →"

**Code block:** Translate comments to Croatian, keep code syntax English

### About Section
- Badge: "Naša priča"
- Headline: "Za sve koji grade digitalno"
- Description: Translate history paragraph, emphasize builders + coders
- Value cards: Translate titles and descriptions
  - Open Source First → stays mostly English (term well-known)
  - Collaboration → "Suradnja"
  - Continuous Learning → "Kontinuirano učenje"
  - No Gatekeeping → "Bez barijera"

### Projects Section
- Badge: "Open Source" (stays English — universally understood)
- Headline: "Projekti zajednice"
- Project descriptions: Translate to Croatian
- Project names, tech stacks, contributor counts: Stay English

### Events Section
- Badge: "Eventovi"
- Headline: "Prošli meetupovi"
- Event descriptions: Translate to Croatian
- Event titles, cities, dates: Stay as-is

### Sponsors Section
- Badge: "Sponzori i partneri"
- Headline: "Oni koji nas pokreću"
- Description: Translate
- Sponsor names: Stay English

### Join Section
- Badge: "Zajednica"
- Headline: "Uhvati vibe"
- Channel descriptions: Translate (Discord, GitHub, LinkedIn, X names stay English)
- Newsletter copy: Translate
- Signup form: Translate labels, placeholders, dropdown options
  - City names stay Croatian (already are)
  - Experience levels: Translate
  - Interest categories: Translate where natural, keep English where standard (e.g., "DevOps" stays)

### Footer
- Brand description: Translate, inclusive of builders + coders
- Nav link labels: Match navbar translations
- Legal/GDPR copy: Translate
- Contact info: Keep emails/URLs as-is
- Copyright: Translate boilerplate

### 404 Page
- Translate error message and CTA to Croatian

## No Architecture Changes

- No new dependencies
- No i18n library
- No new files (except this design doc)
- No changes to component structure, routing, or styling
- Pure text replacement within existing components
