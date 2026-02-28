import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation, Trans } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  const activities = [
    { title: t("about.activities.meetups.title"), description: t("about.activities.meetups.desc") },
    { title: t("about.activities.workshops.title"), description: t("about.activities.workshops.desc") },
    { title: t("about.activities.hackathons.title"), description: t("about.activities.hackathons.desc") },
    { title: t("about.activities.hangouts.title"), description: t("about.activities.hangouts.desc") },
  ];
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section label */}
        <div className="fade-in-section">
          <p className="font-mono text-xs text-sunset-orange tracking-[0.2em] uppercase mb-6">
            {t("about.label")}
          </p>

          <h2 className="font-display font-[800] text-3xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.05] mb-5 max-w-2xl">
            <Trans i18nKey="about.heading">
              Zajednica za buildere koji <span className="text-sunset-orange">shipaju</span>
            </Trans>
          </h2>

          <p className="text-muted-foreground max-w-xl mb-16 leading-relaxed">
            {t("about.description")}
          </p>
        </div>

        {/* Activities — editorial numbered list */}
        <div className="fade-in-section">
          <p className="font-mono text-xs text-sunset-orange tracking-[0.2em] uppercase mb-6">
            {t("about.activitiesLabel")}
          </p>

          <div className="border-t border-border">
            {activities.map((a, i) => (
              <div
                key={a.title}
                className="grid grid-cols-1 md:grid-cols-[64px_200px_1fr] gap-2 md:gap-6 py-7 md:py-8 border-b border-border group"
              >
                <span className="font-mono text-sm text-muted-foreground/30 group-hover:text-sunset-orange/50 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-[700] text-foreground text-lg group-hover:text-sunset-orange transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who should join */}
        <div className="fade-in-section mt-16">
          <p className="font-mono text-xs text-sunset-orange tracking-[0.2em] uppercase mb-6">
            {t("about.whoLabel")}
          </p>

          <p className="text-muted-foreground max-w-xl leading-relaxed">
            {t("about.whoDescription")}
          </p>
        </div>

        {/* CTA */}
        <div className="fade-in-section mt-16">
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
        </div>
      </div>
    </section>
  );
}
