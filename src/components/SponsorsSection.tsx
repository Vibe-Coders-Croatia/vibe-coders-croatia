import { useScrollReveal } from "@/hooks/useScrollReveal";
import reactorLogo from "@/assets/reactor-logo.png";

const sponsors = [
  { name: "Reactor Studio", logo: reactorLogo, url: "https://www.reactor.studio/" },
];

export default function SponsorsSection() {
  const ref = useScrollReveal();

  return (
    <section id="sponsors" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 checkerboard-motif opacity-25 pointer-events-none rounded-br-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="fade-in-section text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-golden-sand/30 text-foreground text-sm font-semibold mb-4">
            Sponzori i partneri
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Oni koji nas <span className="text-gradient-sunset">pokreću</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Naši sponzori omogućuju besplatne eventove, radionice i infrastrukturu zajednice.
          </p>
        </div>

        <div className="fade-in-section flex justify-center">
          {sponsors.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-card border border-border rounded-2xl px-12 py-8 flex items-center justify-center shadow-card transition-all duration-500 ease-out group hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(232,168,74,0.3)] hover:border-golden-sand/60"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-20 w-auto transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
