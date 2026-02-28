import { useScrollReveal } from "@/hooks/useScrollReveal";
import reactorLogo from "@/assets/reactor-logo.webp";
import { useTranslation, Trans } from "react-i18next";

const sponsors = [
  { name: "Reactor Studio", logo: reactorLogo, url: "https://www.reactor.studio/" },
];

export default function SponsorsSection() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section id="sponsors" className="py-20 md:py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="fade-in-section">
          <p className="font-mono text-xs text-golden-sand tracking-[0.2em] uppercase mb-6">
            {t("sponsors.label")}
          </p>

          <h2 className="font-display font-[800] text-3xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.05] mb-5">
            <Trans i18nKey="sponsors.heading">
              Oni koji nas <span className="text-sunset-orange">pokreću</span>
            </Trans>
          </h2>

          <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
            {t("sponsors.description")}
          </p>
        </div>

        <div className="fade-in-section flex flex-wrap gap-4">
          {sponsors.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border rounded-lg px-10 py-6 flex items-center justify-center hover:border-golden-sand/50 hover:shadow-warm transition-all"
            >
              <img
                src={s.logo}
                alt={s.name}
                width={364}
                height={337}
                className="h-14 w-auto opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
