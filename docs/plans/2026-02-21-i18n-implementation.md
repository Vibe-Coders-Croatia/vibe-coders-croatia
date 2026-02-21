# i18n Implementation Plan (HR + EN)

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add English language support with URL-based routing (`/` for Croatian, `/en/` for English) and a fixed top-right language toggle.

**Architecture:** react-i18next with eagerly-loaded JSON translation files. Language is determined by URL path. A `LanguageSync` component syncs the URL to i18next and updates `<html lang="">`. A `LanguagePicker` component renders a fixed top-right toggle.

**Tech Stack:** React 18, React Router 6, i18next, react-i18next, TypeScript, Tailwind CSS

**Design doc:** `docs/plans/2026-02-21-i18n-design.md`

---

### Task 1: Install dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install i18next and react-i18next**

Run:
```bash
pnpm add i18next react-i18next
```

**Step 2: Verify installation**

Run:
```bash
pnpm ls i18next react-i18next
```
Expected: Both packages listed with versions.

**Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add i18next and react-i18next dependencies"
```

---

### Task 2: Create Croatian translation file

**Files:**
- Create: `src/i18n/locales/hr.json`

**Step 1: Create the Croatian translation file**

Create `src/i18n/locales/hr.json` with all Croatian strings extracted from the existing components:

```json
{
  "hero.tagline1": "Kodiraj, gradi, dijeli.",
  "hero.tagline2": "Bez gatekeepinga, bez granica.",
  "hero.tagline3": "Otvoreni kod, otvoreni ljudi.",
  "hero.tagline4": "Tvoj sljedeći projekt počinje ovdje.",

  "about.label": "// naša priča",
  "about.heading": "Zajednica za buildere koji <1>shipaju</1>",
  "about.description": "Vibe Coders Croatia je zajednica za buildere koji shipaju. Bilo da radite na prvom side projektu ili skalirate deseti produkt — ovdje ćete naći ljude koji razumiju. Bez gatekeepinga, bez korporativne ukočenosti — samo makeri koji vole pretvarati ideje u softver koji radi.",
  "about.activitiesLabel": "// što radimo",
  "about.activities.meetups.title": "Meetupovi",
  "about.activities.meetups.desc": "Redovita okupljanja gdje dijelimo znanje, iskustva i najnovije trendove",
  "about.activities.workshops.title": "Radionice",
  "about.activities.workshops.desc": "Hands-on sesije o alatima i frameworcima koji pomažu da gradiš brže",
  "about.activities.hackathons.title": "Hackathoni",
  "about.activities.hackathons.desc": "Intenzivni buildathoni gdje ideje postaju funkcionalni proizvodi u rekordnom vremenu",
  "about.activities.hangouts.title": "Druženja",
  "about.activities.hangouts.desc": "Jer najbolje ideje za produkte nastaju uz kavu (ili pivo)",
  "about.whoLabel": "// za koga je ovo",
  "about.whoDescription": "Svatko tko gradi. Studenti, indie hackeri, startup founderi, senior inženjeri, CTO-ovi — ako shipaš stvari i želiš biti okružen drugima koji rade isto, na pravom si mjestu. Jedini preduvjet je znatiželja.",

  "projects.label": "// open source",
  "projects.heading": "Projekti <1>zajednice</1>",
  "projects.description": "Napravljeno od zajednice, za zajednicu. Pravi kod, pravi utjecaj.",
  "projects.noDescription": "Nema opisa.",
  "projects.emptyState": "Projekti dolaze uskoro. Pratite nas na GitHubu.",

  "sponsors.label": "// sponzori",
  "sponsors.heading": "Oni koji nas <1>pokreću</1>",
  "sponsors.description": "Naši sponzori omogućuju besplatne eventove, radionice i infrastrukturu zajednice.",

  "footer.description": "Hrvatska otvorena zajednica buildera, designera i programera.",
  "footer.navigation": "Navigacija",
  "footer.nav.about": "O nama",
  "footer.nav.projects": "Projekti",
  "footer.nav.sponsors": "Sponzori",
  "footer.privacy": "Privatnost",
  "footer.gdpr": "Prikupljamo samo podatke koje dobrovoljno pružite. Nikada ne prodajemo vaše podatke. Svi podaci pohranjeni su na EU serverima u skladu s GDPR-om. Brisanje možete zatražiti u bilo kojem trenutku putem emaila.",
  "footer.madeIn": "// napravljeno u Zagrebu",

  "notfound.title": "Ups! Stranica nije pronađena",
  "notfound.back": "Povratak na početnu"
}
```

**Step 2: Commit**

```bash
git add src/i18n/locales/hr.json
git commit -m "feat(i18n): add Croatian translation file"
```

---

### Task 3: Create English translation file

**Files:**
- Create: `src/i18n/locales/en.json`

**Step 1: Create the English translation file**

Create `src/i18n/locales/en.json` with all strings translated to English:

```json
{
  "hero.tagline1": "Code, build, share.",
  "hero.tagline2": "No gatekeeping, no limits.",
  "hero.tagline3": "Open source, open people.",
  "hero.tagline4": "Your next project starts here.",

  "about.label": "// our story",
  "about.heading": "A community for builders who <1>ship</1>",
  "about.description": "Vibe Coders Croatia is a community for builders who ship. Whether you're working on your first side project or scaling your tenth product — you'll find people here who get it. No gatekeeping, no corporate stiffness — just makers who love turning ideas into software that works.",
  "about.activitiesLabel": "// what we do",
  "about.activities.meetups.title": "Meetups",
  "about.activities.meetups.desc": "Regular gatherings where we share knowledge, experiences, and the latest trends",
  "about.activities.workshops.title": "Workshops",
  "about.activities.workshops.desc": "Hands-on sessions on tools and frameworks that help you build faster",
  "about.activities.hackathons.title": "Hackathons",
  "about.activities.hackathons.desc": "Intensive buildathons where ideas become functional products in record time",
  "about.activities.hangouts.title": "Hangouts",
  "about.activities.hangouts.desc": "Because the best product ideas are born over coffee (or beer)",
  "about.whoLabel": "// who is this for",
  "about.whoDescription": "Anyone who builds. Students, indie hackers, startup founders, senior engineers, CTOs — if you ship things and want to be surrounded by others who do the same, you're in the right place. The only prerequisite is curiosity.",

  "projects.label": "// open source",
  "projects.heading": "Community <1>projects</1>",
  "projects.description": "Made by the community, for the community. Real code, real impact.",
  "projects.noDescription": "No description.",
  "projects.emptyState": "Projects coming soon. Follow us on GitHub.",

  "sponsors.label": "// sponsors",
  "sponsors.heading": "Those who <1>power</1> us",
  "sponsors.description": "Our sponsors make free events, workshops, and community infrastructure possible.",

  "footer.description": "Croatia's open community of builders, designers, and developers.",
  "footer.navigation": "Navigation",
  "footer.nav.about": "About",
  "footer.nav.projects": "Projects",
  "footer.nav.sponsors": "Sponsors",
  "footer.privacy": "Privacy",
  "footer.gdpr": "We only collect data you voluntarily provide. We never sell your data. All data is stored on EU servers in compliance with GDPR. You can request deletion at any time via email.",
  "footer.madeIn": "// made in Zagreb",

  "notfound.title": "Oops! Page not found",
  "notfound.back": "Back to home"
}
```

**Step 2: Commit**

```bash
git add src/i18n/locales/en.json
git commit -m "feat(i18n): add English translation file"
```

---

### Task 4: Create i18next configuration

**Files:**
- Create: `src/i18n/index.ts`

**Step 1: Create i18next config**

Create `src/i18n/index.ts`:

```typescript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hr from "./locales/hr.json";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    hr: { translation: hr },
    en: { translation: en },
  },
  lng: "hr",
  fallbackLng: "hr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
```

**Step 2: Commit**

```bash
git add src/i18n/index.ts
git commit -m "feat(i18n): add i18next configuration with HR/EN resources"
```

---

### Task 5: Create LanguageSync component and update routing

**Files:**
- Create: `src/components/LanguageSync.tsx`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`

**Step 1: Create LanguageSync component**

Create `src/components/LanguageSync.tsx`. This component reads the current URL path, determines the language, syncs it to i18next, and updates `<html lang="">`:

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguageSync() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const lang = location.pathname.startsWith("/en") ? "en" : "hr";
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [location.pathname, i18n]);

  return null;
}
```

**Step 2: Import i18n in main.tsx**

Modify `src/main.tsx` — add the i18n import **before** the App import so i18next initializes before React renders. Add this single line near the top of the file, after the React imports:

```typescript
import "./i18n";
```

The full file should look like:

```tsx
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './i18n';
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
```

**Step 3: Update App.tsx routing and add LanguageSync**

Modify `src/App.tsx` to:
1. Add `/en` route that serves the same `<Index />` page
2. Add `<LanguageSync />` inside the `<BrowserRouter>`

The full updated file:

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LanguageSync from "./components/LanguageSync";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <LanguageSync />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/en" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

**Step 4: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds with no errors.

**Step 5: Commit**

```bash
git add src/components/LanguageSync.tsx src/App.tsx src/main.tsx
git commit -m "feat(i18n): add LanguageSync component and /en route"
```

---

### Task 6: Create LanguagePicker component

**Files:**
- Create: `src/components/LanguagePicker.tsx`
- Modify: `src/pages/Index.tsx`

**Step 1: Create the LanguagePicker component**

Create `src/components/LanguagePicker.tsx`. Fixed top-right corner, monospace editorial style matching the site aesthetic:

```tsx
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguagePicker() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isEnglish = i18n.language === "en";

  const switchTo = (lang: "hr" | "en") => {
    const hash = location.hash;
    const target = lang === "en" ? `/en${hash}` : `/${hash}`;
    navigate(target);
  };

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 font-mono text-[11px] tracking-[0.25em] uppercase flex items-center gap-1.5">
      <button
        onClick={() => switchTo("hr")}
        className={`transition-colors px-1 py-1 ${
          !isEnglish
            ? "text-foreground"
            : "text-muted-foreground/40 hover:text-sunset-orange"
        }`}
        aria-label="Hrvatski"
      >
        HR
      </button>
      <span className="text-muted-foreground/20">·</span>
      <button
        onClick={() => switchTo("en")}
        className={`transition-colors px-1 py-1 ${
          isEnglish
            ? "text-foreground"
            : "text-muted-foreground/40 hover:text-sunset-orange"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
```

**Step 2: Add LanguagePicker to Index page**

Modify `src/pages/Index.tsx` to render the picker:

```tsx
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import LanguagePicker from "@/components/LanguagePicker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguagePicker />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
```

**Step 3: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds.

**Step 4: Commit**

```bash
git add src/components/LanguagePicker.tsx src/pages/Index.tsx
git commit -m "feat(i18n): add fixed top-right language picker (HR/EN toggle)"
```

---

### Task 7: Translate HeroSection

**Files:**
- Modify: `src/components/HeroSection.tsx`

**Step 1: Update HeroSection to use translations**

In `src/components/HeroSection.tsx`:

1. Add the `useTranslation` import at the top:
```typescript
import { useTranslation } from "react-i18next";
```

2. Replace the hardcoded `taglines` array. Remove the module-level `const taglines = [...]` and instead derive taglines from `t()` inside the component.

3. Inside `HeroSection()`, add at the top:
```typescript
const { t } = useTranslation();
const taglines = [
  t("hero.tagline1"),
  t("hero.tagline2"),
  t("hero.tagline3"),
  t("hero.tagline4"),
];
```

**Important:** The taglines array must be computed inside the component body (not at module level) so `t()` picks up language changes.

**Step 2: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat(i18n): translate HeroSection taglines"
```

---

### Task 8: Translate AboutSection

**Files:**
- Modify: `src/components/AboutSection.tsx`

**Step 1: Update AboutSection to use translations**

In `src/components/AboutSection.tsx`:

1. Add imports:
```typescript
import { useTranslation, Trans } from "react-i18next";
```

2. Remove the module-level `const activities = [...]` array.

3. Inside the component function, add at the top:
```typescript
const { t } = useTranslation();
const activities = [
  { title: t("about.activities.meetups.title"), description: t("about.activities.meetups.desc") },
  { title: t("about.activities.workshops.title"), description: t("about.activities.workshops.desc") },
  { title: t("about.activities.hackathons.title"), description: t("about.activities.hackathons.desc") },
  { title: t("about.activities.hangouts.title"), description: t("about.activities.hangouts.desc") },
];
```

4. Replace hardcoded strings in JSX:
   - `"// naša priča"` → `{t("about.label")}`
   - The heading `Zajednica za buildere koji <span>shipaju</span>` → use `<Trans>`:
     ```tsx
     <Trans i18nKey="about.heading">
       Zajednica za buildere koji <span className="text-sunset-orange">shipaju</span>
     </Trans>
     ```
   - The description paragraph → `{t("about.description")}`
   - `"// što radimo"` → `{t("about.activitiesLabel")}`
   - `"// za koga je ovo"` → `{t("about.whoLabel")}`
   - The eligibility paragraph → `{t("about.whoDescription")}`

**Step 2: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/AboutSection.tsx
git commit -m "feat(i18n): translate AboutSection"
```

---

### Task 9: Translate ProjectsSection

**Files:**
- Modify: `src/components/ProjectsSection.tsx`

**Step 1: Update ProjectsSection to use translations**

In `src/components/ProjectsSection.tsx`:

1. Add imports:
```typescript
import { useTranslation, Trans } from "react-i18next";
```

2. Inside the component function, add:
```typescript
const { t } = useTranslation();
```

3. Replace hardcoded strings:
   - `"// open source"` → `{t("projects.label")}`
   - Heading `Projekti <span>zajednice</span>` → use `<Trans>`:
     ```tsx
     <Trans i18nKey="projects.heading">
       Projekti <span className="text-sunset-orange">zajednice</span>
     </Trans>
     ```
   - Description paragraph → `{t("projects.description")}`
   - `"Nema opisa."` fallback → `t("projects.noDescription")`
   - Empty state text → `{t("projects.emptyState")}`

**Step 2: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/ProjectsSection.tsx
git commit -m "feat(i18n): translate ProjectsSection"
```

---

### Task 10: Translate SponsorsSection

**Files:**
- Modify: `src/components/SponsorsSection.tsx`

**Step 1: Update SponsorsSection to use translations**

In `src/components/SponsorsSection.tsx`:

1. Add imports:
```typescript
import { useTranslation, Trans } from "react-i18next";
```

2. Inside the component function, add:
```typescript
const { t } = useTranslation();
```

3. Replace hardcoded strings:
   - `"// sponzori"` → `{t("sponsors.label")}`
   - Heading `Oni koji nas <span>pokreću</span>` → use `<Trans>`:
     ```tsx
     <Trans i18nKey="sponsors.heading">
       Oni koji nas <span className="text-sunset-orange">pokreću</span>
     </Trans>
     ```
   - Description paragraph → `{t("sponsors.description")}`

**Step 2: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/SponsorsSection.tsx
git commit -m "feat(i18n): translate SponsorsSection"
```

---

### Task 11: Translate Footer

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Update Footer to use translations**

In `src/components/Footer.tsx`:

1. Add import:
```typescript
import { useTranslation } from "react-i18next";
```

2. Remove the module-level `const navLinks = [...]` array.

3. Inside the component function, add at the top:
```typescript
const { t } = useTranslation();
const navLinks = [
  { label: t("footer.nav.about"), href: "#about" },
  { label: t("footer.nav.projects"), href: "#projects" },
  { label: t("footer.nav.sponsors"), href: "#sponsors" },
];
```

4. Replace hardcoded strings:
   - `"Hrvatska otvorena zajednica buildera, designera i programera."` → `{t("footer.description")}`
   - `"Navigacija"` → `{t("footer.navigation")}`
   - `"Privatnost"` → `{t("footer.privacy")}`
   - The GDPR paragraph → `{t("footer.gdpr")}`
   - `"// napravljeno u Zagrebu"` → `{t("footer.madeIn")}`

**Step 2: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(i18n): translate Footer"
```

---

### Task 12: Translate NotFound page

**Files:**
- Modify: `src/pages/NotFound.tsx`

**Step 1: Update NotFound to use translations**

In `src/pages/NotFound.tsx`:

1. Add import:
```typescript
import { useTranslation } from "react-i18next";
```

2. Inside the component, add:
```typescript
const { t } = useTranslation();
```

3. Replace hardcoded strings:
   - `"Ups! Stranica nije pronađena"` → `{t("notfound.title")}`
   - `"Povratak na početnu"` → `{t("notfound.back")}`

**Step 2: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/pages/NotFound.tsx
git commit -m "feat(i18n): translate NotFound page"
```

---

### Task 13: Add hreflang SEO tags

**Files:**
- Modify: `src/index.html`

**Step 1: Add hreflang link tags to index.html**

In `index.html`, inside `<head>`, after the canonical link, add:

```html
<link rel="alternate" hreflang="hr" href="https://vibecoders.hr/" />
<link rel="alternate" hreflang="en" href="https://vibecoders.hr/en" />
<link rel="alternate" hreflang="x-default" href="https://vibecoders.hr/" />
```

Also add the `og:locale:alternate` tag after the existing `og:locale`:

```html
<meta property="og:locale:alternate" content="en_US" />
```

**Step 2: Verify the app builds**

Run:
```bash
pnpm build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat(i18n): add hreflang and og:locale:alternate SEO tags"
```

---

### Task 14: Final verification

**Step 1: Build the project**

Run:
```bash
pnpm build
```
Expected: Build succeeds with no errors or warnings.

**Step 2: Start the dev server and manually verify**

Run:
```bash
pnpm dev
```

Verify:
1. `/` loads in Croatian — all text is Croatian
2. Click "EN" in top-right → navigates to `/en` — all text is English
3. Click "HR" → navigates back to `/` — all text is Croatian
4. Hash anchors work: click footer nav links, language stays correct
5. Refresh on `/en` — page loads in English
6. Language picker is visible while scrolling
7. On mobile viewport: picker is at `top-4 right-4`
8. `<html lang="">` updates correctly (inspect element)

**Step 3: Run any existing tests**

Run:
```bash
pnpm test
```
Expected: All existing tests still pass.

**Step 4: Final commit if any fixups needed**

Only if adjustments were made during verification.
