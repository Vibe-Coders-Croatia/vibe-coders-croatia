# Croatian Translation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Translate the entire Vibe Coders Croatia website to Croatian with a warm, positive tone that is inclusive of product builders alongside developers.

**Architecture:** Direct in-component string replacement across 9 files. No new dependencies, no i18n library, no new files. Pure text swaps.

**Tech Stack:** React, TypeScript, Vite (no changes to stack)

**Design doc:** `docs/plans/2026-02-20-croatian-translation-design.md`

---

### Task 1: Translate Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Replace nav link labels**

Change the `navLinks` array (line 5-8):

```typescript
const navLinks = [
  { label: "O nama", href: "#about" },
  { label: "Projekti", href: "#projects" },
];
```

**Step 2: Verify in browser**

Run: `npm run dev` (if not already running)
Check: Navbar shows "O nama" and "Projekti". Mobile hamburger menu too.

**Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: translate Navbar to Croatian"
```

---

### Task 2: Translate HeroSection

**Files:**
- Modify: `src/components/HeroSection.tsx`

**Step 1: Replace taglines array (line 4-10)**

```typescript
const taglines = [
  "Gdje kod postaje zajednica.",
  "Kodiraj, gradi, dijeli.",
  "Bez gatekeepinga, bez granica.",
  "Otvoreni kod, otvoreni ljudi.",
  "Tvoj sljedeći projekt počinje ovdje.",
];
```

**Step 2: Replace code block comments (line 12-21)**

```typescript
const codeLines = [
  { comment: true, text: "// Misija: Vibe Coders Croatia" },
  { comment: false, text: 'const values = [' },
  { comment: false, text: '  "open_source",        // dijelimo sve' },
  { comment: false, text: '  "no_gatekeeping",     // svi su dobrodošli' },
  { comment: false, text: '  "learn_together",     // rastemo zajedno' },
  { comment: false, text: '  "build_in_public",    // gradimo & inspiriramo' },
  { comment: false, text: '];' },
  { comment: true, text: "// Dođi graditi s nama 🚀" },
];
```

**Step 3: Replace stats labels (line 38-43)**

```typescript
const stats = [
  { value: "420+", label: "Članova" },
  { value: "38", label: "Eventova" },
  { value: "4", label: "Grada" },
  { value: "12", label: "Open Source projekata" },
];
```

**Step 4: Replace CTA button text**

Change "Join the Community" (line 113) to:
```
Pridruži se zajednici
```

Change "See Events →" (line 119) to:
```
Pogledaj eventove →
```

**Step 5: Verify in browser**

Check: Typewriter cycles through Croatian taglines. Code block has Croatian comments. Stats show Croatian labels. CTA buttons are Croatian.

**Step 6: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat: translate HeroSection to Croatian"
```

---

### Task 3: Translate AboutSection

**Files:**
- Modify: `src/components/AboutSection.tsx`

**Step 1: Replace value cards (line 4-33)**

```typescript
const values = [
  {
    icon: Code2,
    title: "Open Source First",
    description: "Vjerujemo u gradnju na otvorenom, dijeljenje koda i zajedničko jačanje open source zajednice.",
    color: "text-tropical-teal",
    bg: "bg-tropical-teal/10",
  },
  {
    icon: Users,
    title: "Suradnja",
    description: "Bez obzira na iskustvo ili struku — seniori i juniori, koderi i product builderi, svi uče jedni od drugih.",
    color: "text-sunset-orange",
    bg: "bg-sunset-orange/10",
  },
  {
    icon: Lightbulb,
    title: "Kontinuirano učenje",
    description: "Radionice, predavanja i hackathoni koji održavaju hrvatsku tech scenu oštrom i znatiželjnom.",
    color: "text-golden-sand",
    bg: "bg-golden-sand/20",
  },
  {
    icon: Heart,
    title: "Bez barijera",
    description: "Bez gatekeepinga, bez elitizma. Svatko je dobrodošao — od studenata do CTO-a, od prvog committa do stotog producta.",
    color: "text-warm-coral",
    bg: "bg-warm-coral/10",
  },
];
```

**Step 2: Replace badge text**

Change "Our Story" (line 45) to:
```
Naša priča
```

**Step 3: Replace headline**

Change the h2 content (lines 47-49) to:
```html
<h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
  Za sve koji grade
  <span className="text-gradient-sunset"> digitalno</span>
</h2>
```

**Step 4: Replace description paragraph**

Change the paragraph (lines 51-56) to:
```html
<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
  Vibe Coders Croatia je krenuo 2022. kao mali zagrebački meetup — šačica entuzijasta
  koji su htjeli mjesto bez korporativne ukočenosti. Samo dobar kod, hladna piva i iskren razgovor.
  Danas nas je 420+, organiziramo eventove od Osijeka do Splita, ujedinjeni jednom idejom:{" "}
  <span className="text-sunset-orange font-medium">Hrvatska zaslužuje zajednicu svjetske klase za sve koji grade digitalno.</span>
</p>
```

**Step 5: Verify in browser**

Check: Badge says "Naša priča". Headline says "Za sve koji grade digitalno". Description is in Croatian. Value cards are translated.

**Step 6: Commit**

```bash
git add src/components/AboutSection.tsx
git commit -m "feat: translate AboutSection to Croatian"
```

---

### Task 4: Translate ProjectsSection

**Files:**
- Modify: `src/components/ProjectsSection.tsx`

**Step 1: Replace project descriptions and author lines (line 4-59)**

```typescript
const projects = [
  {
    id: 1,
    name: "hr-jobs-api",
    description: "Otvoreni API koji agregira hrvatske tech oglase za posao iz više izvora. Ažurira se dnevno.",
    stack: ["Go", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
    author: "12 kontributora",
  },
  {
    id: 2,
    name: "splitcode-ide",
    description: "Kolaborativni code editor u browseru napravljen za pair programming sessione na meetupovima.",
    stack: ["React", "TypeScript", "WebSockets"],
    github: "#",
    demo: "#",
    author: "8 kontributora",
  },
  {
    id: 3,
    name: "jadran-weather",
    description: "Prekrasan weather dashboard za jadransku obalu s morskim podacima i povijesnim grafovima.",
    stack: ["Svelte", "Python", "Recharts"],
    github: "#",
    demo: "#",
    author: "5 kontributora",
  },
  {
    id: 4,
    name: "balkancli",
    description: "CLI alat za uobičajene balkanske dev taskove — provjera PDV-a, validacija OIB-a i više.",
    stack: ["Rust", "Shell"],
    github: "#",
    demo: null,
    author: "4 kontributora",
  },
  {
    id: 5,
    name: "meetup-platform",
    description: "Naša vlastita open-source RSVP i community platforma nastala na 48-satnom hackathonu.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    github: "#",
    demo: "#",
    author: "15 kontributora",
  },
  {
    id: 6,
    name: "devbuddy-hr",
    description: "AI pair-programmer prilagođen hrvatskom kontekstu — lokalni frameworkovi, GDPR specifičnosti i više.",
    stack: ["Python", "FastAPI", "LLM"],
    github: "#",
    demo: "#",
    author: "6 kontributora",
  },
];
```

**Step 2: Replace section headline and subtitle**

Change the h2 (lines 73-75) to:
```html
<h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
  Projekti <span className="text-gradient-sunset">zajednice</span>
</h2>
```

Change the subtitle paragraph (lines 76-78) to:
```html
<p className="text-muted-foreground max-w-xl mx-auto">
  Napravljeno od zajednice, za zajednicu. Pravi kod, pravi utjecaj.
</p>
```

**Step 3: Verify in browser**

Check: Section headline is "Projekti zajednice". Project descriptions are Croatian. Author lines say "X kontributora".

**Step 4: Commit**

```bash
git add src/components/ProjectsSection.tsx
git commit -m "feat: translate ProjectsSection to Croatian"
```

---

### Task 5: Translate EventsSection

**Files:**
- Modify: `src/components/EventsSection.tsx`

**Step 1: Replace badge text**

Change "Events" (line 23) to:
```
Eventovi
```

**Step 2: Replace headline**

Change the h2 (lines 26-28) to:
```html
<h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
  Prošli <span className="text-gradient-sunset">meetupovi</span>
</h2>
```

**Step 3: Replace subtitle paragraph**

Change the paragraph (lines 29-31) to:
```html
<p className="text-muted-foreground max-w-xl mx-auto">
  Pogled unatrag na sve što smo zajedno izgradili diljem Hrvatske i online.
</p>
```

**Step 4: Replace "attended" text**

Change the template `{e.attendees} attended` (line 42) to:
```
{e.attendees} sudionika
```

**Step 5: Verify in browser**

Check: Badge says "Eventovi". Headline says "Prošli meetupovi". Attendance shows "sudionika".

**Step 6: Commit**

```bash
git add src/components/EventsSection.tsx
git commit -m "feat: translate EventsSection to Croatian"
```

---

### Task 6: Translate SponsorsSection

**Files:**
- Modify: `src/components/SponsorsSection.tsx`

**Step 1: Replace badge text**

Change "Sponsors & Partners" (line 18) to:
```
Sponzori i partneri
```

**Step 2: Replace headline**

Change the h2 (lines 20-22) to:
```html
<h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
  Oni koji nas <span className="text-gradient-sunset">pokreću</span>
</h2>
```

**Step 3: Replace subtitle paragraph**

Change the paragraph (lines 23-25) to:
```html
<p className="text-muted-foreground max-w-xl mx-auto">
  Naši sponzori omogućuju besplatne eventove, radionice i infrastrukturu zajednice.
</p>
```

**Step 4: Verify in browser**

Check: Badge says "Sponzori i partneri". Headline says "Oni koji nas pokreću".

**Step 5: Commit**

```bash
git add src/components/SponsorsSection.tsx
git commit -m "feat: translate SponsorsSection to Croatian"
```

---

### Task 7: Translate JoinSection

**Files:**
- Modify: `src/components/JoinSection.tsx`

**Step 1: Replace channel descriptions and labels (line 5-38)**

```typescript
const channels = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Svakodnevni chat, kanali za pomoć i najave",
    href: "#",
    color: "gradient-sunset",
    label: "Pridruži se na Discord",
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Doprinesi našim open-source projektima",
    href: "#",
    color: "bg-navy",
    label: "Pogledaj repozitorije",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    description: "Profesionalne objave i prilike za posao",
    href: "#",
    color: "bg-tropical-teal",
    label: "Zaprati nas",
  },
  {
    icon: Twitter,
    name: "Twitter / X",
    description: "Brze objave, memeovi i tech rasprave",
    href: "#",
    color: "bg-sunset-purple",
    label: "Zaprati @VibeCodersHR",
  },
];
```

**Step 2: Replace form option arrays (line 40-42)**

```typescript
const cities = ["Zagreb", "Split", "Rijeka", "Osijek", "Drugo"];
const experienceLevels = ["Student / Učim", "Junior (0–2 god.)", "Mid (2–5 god.)", "Senior (5+ god.)", "Engineering Lead"];
const interests = ["Web Dev", "Mobile", "Backend / API", "DevOps / Cloud", "AI / ML", "Open Source", "Rust / Systems", "Game Dev"];
```

**Step 3: Replace section badge, headline, and subtitle**

Change "Community" (line 81) to:
```
Zajednica
```

Change the h2 (lines 84-86) to:
```html
<h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
  Uhvati <span className="text-gradient-sunset">vibe</span>
</h2>
```

Change the subtitle paragraph (lines 87-89) to:
```html
<p className="text-muted-foreground max-w-xl mx-auto">
  Postani dio najaktivnije zajednice za buildere i kodere u Hrvatskoj. Odaberi svoj kanal, pretplati se na novosti ili se predstavi.
</p>
```

**Step 4: Replace Newsletter section text**

Change "Newsletter" h3 (line 122) — stays "Newsletter" (commonly used in Croatian too).

Change newsletter description (lines 123-125) to:
```
Mjesečni pregled hrvatskih tech eventova, open source projekata i highlightova zajednice.
```

Change "You're subscribed! Check your inbox." (line 130) to:
```
Pretplaćen/a si! Provjeri inbox.
```

Change placeholder "your@email.com" — stays as-is (universal).

Change "Subscribe" button (line 146) to:
```
Pretplati se
```

**Step 5: Replace Introduce Yourself form text**

Change "Introduce Yourself" h3 (line 154) to:
```
Predstavi se
```

Change "Tell us a bit about you and we'll match you with the right people." (line 155) to:
```
Reci nam nešto o sebi i spojit ćemo te s pravim ljudima.
```

Change "Hvala! We'll be in touch." (line 160) to:
```
Hvala! Javimo ti se uskoro.
```

Change "Welcome to Vibe Coders Croatia 🎉" (line 161) to:
```
Dobrodošao/la u Vibe Coders Croatia 🎉
```

Change placeholder "Your name" (line 166) to:
```
Tvoje ime
```

Change placeholder "Select your city" (line 179) to:
```
Odaberi grad
```

Change placeholder "Experience level" (line 188) to:
```
Razina iskustva
```

Change "Interests (select all that apply)" (line 192) to:
```
Interesi (odaberi sve što te zanima)
```

Change "Join the Community" submit button (line 214) to:
```
Pridruži se zajednici
```

**Step 6: Verify in browser**

Check: All channel cards, newsletter section, and signup form are in Croatian.

**Step 7: Commit**

```bash
git add src/components/JoinSection.tsx
git commit -m "feat: translate JoinSection to Croatian"
```

---

### Task 8: Translate Footer

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Replace nav links (line 4-8)**

```typescript
const navLinks = [
  { label: "O nama", href: "#about" },
  { label: "Projekti", href: "#projects" },
  { label: "Sponzori", href: "#sponsors" },
];
```

**Step 2: Replace brand tagline**

Change "Building the future, together" (line 34) to:
```
Gradimo budućnost, zajedno
```

**Step 3: Replace brand description**

Change "Croatia's open developer community — where code meets culture, coast, and collaboration." (lines 37-39) to:
```
Hrvatska otvorena zajednica buildera i kodera — gdje se kod, kultura, obala i suradnja spajaju.
```

**Step 4: Replace "Navigation" heading**

Change "Navigation" (line 57) to:
```
Navigacija
```

**Step 5: Replace "Contact" heading**

Change "Contact" (line 74) to:
```
Kontakt
```

**Step 6: Replace GDPR text**

Change the GDPR paragraph (line 89) to:
```html
<strong className="text-white/60">Privatnost / GDPR:</strong> Prikupljamo samo podatke koje dobrovoljno pružite. Nikada ne prodajemo vaše podatke. Svi podaci pohranjeni su na EU serverima u skladu s GDPR-om. Brisanje možete zatražiti u bilo kojem trenutku putem emaila.
```

**Step 7: Replace copyright line**

Change "All rights reserved." (line 98) to:
```
Sva prava pridržana.
```

Change the built-in line (line 99) to:
```
// napravljeno u 🇭🇷 s ❤️ & ☕
```

**Step 8: Verify in browser**

Check: Footer shows Croatian nav links, brand description, GDPR text, and copyright.

**Step 9: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: translate Footer to Croatian"
```

---

### Task 9: Translate NotFound Page

**Files:**
- Modify: `src/pages/NotFound.tsx`

**Step 1: Replace 404 text**

Change "Oops! Page not found" (line 15) to:
```
Ups! Stranica nije pronađena
```

Change "Return to Home" (line 16-18) to:
```
Povratak na početnu
```

**Step 2: Verify in browser**

Navigate to a non-existent route (e.g., `/asdf`) and check Croatian 404 message.

**Step 3: Commit**

```bash
git add src/pages/NotFound.tsx
git commit -m "feat: translate NotFound page to Croatian"
```

---

### Task 10: Final Review and Verification

**Step 1: Full site walkthrough**

Scroll through the entire site and verify:
- Navbar: "O nama", "Projekti"
- Hero: Croatian typewriter taglines, Croatian code comments, Croatian stats labels, Croatian CTAs
- About: "Naša priča", "Za sve koji grade digitalno", Croatian value cards
- Projects: "Projekti zajednice", Croatian descriptions, "X kontributora"
- Events: "Eventovi", "Prošli meetupovi", "X sudionika"
- Sponsors: "Sponzori i partneri", "Oni koji nas pokreću"
- Join: "Uhvati vibe", Croatian channels, Croatian forms
- Footer: Croatian nav, description, GDPR, copyright
- 404: Croatian error message

**Step 2: Check for any remaining English**

Search all modified files for common English words that should have been translated:
- "Join", "Subscribe", "Community", "Built by", "attended", "contributed"

**Step 3: Check inclusivity**

Verify no section narrows the audience to just "developeri" — should reference builders, creators, and the broader community.

**Step 4: Commit any fixes**

If any issues found, fix and commit.
