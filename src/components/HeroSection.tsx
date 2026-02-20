import { useEffect, useState } from "react";
import logo from "@/assets/vibecoders.png";

const taglines = [
  "Kodiraj, gradi, dijeli.",
  "Bez gatekeepinga, bez granica.",
  "Otvoreni kod, otvoreni ljudi.",
  "Tvoj sljedeći projekt počinje ovdje.",
];

const techs = [
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "Rust", slug: "rust" },
  { name: "Go", slug: "go" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Docker", slug: "docker" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "GraphQL", slug: "graphql" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Vue", slug: "vuedotjs" },
  { name: "Svelte", slug: "svelte" },
];

export default function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = taglines[taglineIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2400);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
        return () => clearTimeout(t);
      } else {
        setTaglineIndex((i) => (i + 1) % taglines.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, taglineIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Warm sun-washed gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, hsl(36 45% 94%) 0%, hsl(39 32% 97%) 50%, hsl(39 32% 97%) 100%)",
        }}
      />

      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Subtle warm radial glow behind title */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "500px",
          background: "radial-gradient(ellipse at center, hsl(24 79% 54% / 0.08), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src={logo}
          alt=""
          className="w-20 h-20 md:w-24 md:h-24 object-contain mb-8 reveal-up"
          style={{ animationDelay: "0ms" }}
        />

        {/* Provenance */}
        <p
          className="font-mono text-[11px] text-muted-foreground/70 tracking-[0.25em] uppercase mb-8 reveal-up"
          style={{ animationDelay: "150ms" }}
        >
          est. 2026 · Zagreb, HR
        </p>

        {/* Title */}
        <h1
          className="font-display font-[800] tracking-tight leading-[0.92] mb-6 reveal-up"
          style={{
            animationDelay: "300ms",
            fontSize: "clamp(3rem, 9vw, 7rem)",
          }}
        >
          <span className="text-foreground">VIBE CODERS</span>
          <br />
          <span className="text-sunset-orange">CROATIA</span>
        </h1>

        {/* Rule */}
        <div
          className="h-px w-16 bg-sunset-orange/40 mb-8 rule-expand"
          style={{ animationDelay: "550ms" }}
        />

        {/* Typewriter */}
        <div
          className="font-mono text-sm text-muted-foreground mb-10 h-6 flex items-center reveal-up"
          style={{ animationDelay: "700ms" }}
        >
          <span className="text-sunset-orange/50 mr-2">&gt;</span>
          <span className="text-foreground/60">{displayed}</span>
          <span className="cursor-blink text-sunset-orange ml-0.5">_</span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-3 reveal-up"
          style={{ animationDelay: "850ms" }}
        >
          <a
            href="https://discord.gg/mTbs9mNv"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 border border-border hover:border-[#5865F2]/40 rounded-lg font-mono text-sm text-foreground/70 hover:text-[#5865F2] transition-colors"
          >
            <svg className="w-4 h-4 opacity-40 group-hover:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discord
            <span className="text-border group-hover:text-[#5865F2]/30 transition-colors">&rarr;</span>
          </a>
          <a
            href="https://www.meetup.com/vibe-coders-croatia/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 border border-border hover:border-[#ED1C40]/40 rounded-lg font-mono text-sm text-foreground/70 hover:text-[#ED1C40] transition-colors"
          >
            <img
              src={`https://cdn.simpleicons.org/meetup/${encodeURIComponent("374151")}`}
              alt=""
              className="w-4 h-4 opacity-40 group-hover:opacity-80 transition-opacity"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            Meetup
            <span className="text-border group-hover:text-[#ED1C40]/30 transition-colors">&rarr;</span>
          </a>
          <a
            href="https://github.com/Vibe-Coders-Croatia"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 border border-border hover:border-foreground/30 rounded-lg font-mono text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4 opacity-40 group-hover:opacity-80 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
            <span className="text-border group-hover:text-foreground/30 transition-colors">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Tech ticker — subtle status bar */}
      <div
        className="absolute bottom-0 w-full border-t border-border/50 py-3 overflow-hidden reveal-up"
        style={{ animationDelay: "1200ms" }}
      >
        <div className="flex animate-ticker" style={{ width: "max-content" }}>
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/35 px-4 whitespace-nowrap"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/${encodeURIComponent("9ca3af")}`}
                alt=""
                className="w-3.5 h-3.5 opacity-50"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {tech.name}
              <span className="ml-3 text-border">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
