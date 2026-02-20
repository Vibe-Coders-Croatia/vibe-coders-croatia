import { useEffect, useState } from "react";
import logo from "@/assets/vibecoders.png";

const taglines = [
  "Kodiraj, gradi, dijeli.",
  "Bez gatekeepinga, bez granica.",
  "Otvoreni kod, otvoreni ljudi.",
  "Tvoj sljedeći projekt počinje ovdje.",
];

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

const techLogos = [
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
  const [codeVisible, setCodeVisible] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const target = taglines[taglineIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
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

  // Code reveal animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeVisible((v) => (v < codeLines.length ? v + 1 : v));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden gradient-hero">
      {/* Croatian checkerboard decorative overlay */}
      <div className="absolute inset-0 checkerboard-motif opacity-30 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 rounded-full bg-sunset-orange/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-tropical-teal/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Left: Headline + CTAs */}
        <div className="flex-1 w-full text-center lg:text-left">
          <div className="mb-6 flex justify-center lg:justify-start">
            <img src={logo} alt="Vibe Coders Croatia" className="w-52 h-52 object-contain drop-shadow-2xl" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Vibe Coders
            <br />
            <span className="text-golden-sand">Croatia</span>
          </h1>

          <div className="text-xl md:text-2xl text-white/80 font-light mb-8 h-8 flex items-center justify-center lg:justify-start gap-1">
            <span>{displayed}</span>
            <span className="cursor-blink text-sunset-orange font-light">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://discord.gg/mTbs9mNv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#5865F2] text-white font-semibold text-base shadow-warm hover:bg-[#4752C4] transition-all hover:scale-105 active:scale-100"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>
            <a
              href="https://www.meetup.com/vibe-coders-croatia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#ED1C40] text-white font-semibold text-base shadow-warm hover:bg-[#D1173A] transition-all hover:scale-105 active:scale-100"
            >
              <img src="https://cdn.simpleicons.org/meetup/white" alt="" className="w-7 h-7" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              Meetup
            </a>
            <a
              href="https://github.com/Vibe-Coders-Croatia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#333] text-white font-semibold text-base shadow-warm hover:bg-[#555] transition-all hover:scale-105 active:scale-100"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>

        </div>

        {/* Right: Animated code block */}
        <div className="flex-1 w-full max-w-md">
          <div className="glass-navy rounded-2xl overflow-hidden shadow-2xl border border-sunset-orange/20">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-warm-coral/70" />
              <div className="w-3 h-3 rounded-full bg-golden-sand/70" />
              <div className="w-3 h-3 rounded-full bg-tropical-teal/70" />
              <span className="ml-3 text-white/40 text-xs font-mono">community.ts</span>
            </div>
            {/* Code lines */}
            <div className="p-5 font-mono text-sm space-y-1 min-h-[220px]">
              {codeLines.slice(0, codeVisible).map((line, i) => (
                <div
                  key={i}
                  className="transition-all duration-300 animate-[fadeInUp_0.3s_ease-out]"
                >
                  {line.comment ? (
                    <span className="text-tropical-teal/80">{line.text}</span>
                  ) : (
                    <span className="text-white/85">{line.text}</span>
                  )}
                </div>
              ))}
              {codeVisible < codeLines.length && (
                <div className="w-2 h-4 bg-sunset-orange cursor-blink inline-block" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tech ticker */}
      <div className="w-full overflow-hidden py-4 bg-black/20 border-t border-white/10 backdrop-blur-sm">
        <div className="flex animate-ticker" style={{ width: "max-content" }}>
          {[...techLogos, ...techLogos].map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 text-white/70 text-sm font-medium whitespace-nowrap"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.slug}/white`}
                alt={tech.name}
                className="w-5 h-5 opacity-80"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span>{tech.name}</span>
              <span className="ml-4 text-white/20">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
