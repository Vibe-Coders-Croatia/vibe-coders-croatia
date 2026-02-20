import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, ExternalLink, Star } from "lucide-react";
import repos from "@/data/repos.json";

export default function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-20 md:py-28 bg-card relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="fade-in-section">
          <p className="font-mono text-[11px] text-tropical-teal tracking-[0.2em] uppercase mb-6">
            // open source
          </p>

          <h2 className="font-display font-[800] text-3xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.05] mb-5">
            Projekti <span className="text-sunset-orange">zajednice</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mb-12 leading-relaxed">
            Napravljeno od zajednice, za zajednicu. Pravi kod, pravi utjecaj.
          </p>
        </div>

        {repos.length > 0 ? (
          <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <div
                key={repo.name}
                className="group border border-border rounded-lg p-6 hover:border-tropical-teal/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-muted-foreground/50" />
                    <span className="font-mono text-sm text-foreground group-hover:text-tropical-teal transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground/40 hover:text-foreground transition-colors p-1"
                      title="GitHub"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {repo.description || "Nema opisa."}
                </p>

                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="font-mono text-xs text-tropical-teal/80">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="font-mono text-xs text-muted-foreground/50"
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground/40 ml-auto">
                      <Star className="w-3 h-3" />
                      {repo.stars}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="fade-in-section text-center py-12">
            <p className="text-muted-foreground font-mono text-sm">
              Projekti dolaze uskoro. Pratite nas na GitHubu.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
