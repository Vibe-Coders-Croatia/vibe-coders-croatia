import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  {
    title: "Open Source First",
    description: "Vjerujemo u gradnju na otvorenom, dijeljenje koda i zajedničko jačanje open source zajednice.",
  },
  {
    title: "Suradnja",
    description: "Bez obzira na iskustvo ili struku — seniori i juniori, koderi i product builderi, svi uče jedni od drugih.",
  },
  {
    title: "Kontinuirano učenje",
    description: "Radionice, predavanja i hackathoni koji održavaju hrvatsku tech scenu oštrom i znatiželjnom.",
  },
  {
    title: "Bez barijera",
    description: "Bez gatekeepinga, bez elitizma. Svatko je dobrodošao — od studenata do CTO-a, od prvog committa do stotog producta.",
  },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section label */}
        <div className="fade-in-section">
          <p className="font-mono text-[11px] text-sunset-orange tracking-[0.2em] uppercase mb-6">
            // naša priča
          </p>

          <h2 className="font-display font-[800] text-3xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.05] mb-5 max-w-2xl">
            Za sve koji grade{" "}
            <span className="text-sunset-orange">digitalno</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mb-16 leading-relaxed">
            Zajednica designera, developera i buildera nastala 2026. iz jednostavne ideje
            — grupa strastvenih buildera i veterana industrije koji su odlučili graditi zajedno.
          </p>
        </div>

        {/* Values — editorial numbered list */}
        <div className="fade-in-section border-t border-border">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="grid grid-cols-1 md:grid-cols-[64px_200px_1fr] gap-2 md:gap-6 py-7 md:py-8 border-b border-border group"
            >
              <span className="font-mono text-sm text-muted-foreground/30 group-hover:text-sunset-orange/50 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display font-[700] text-foreground text-lg group-hover:text-sunset-orange transition-colors">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
