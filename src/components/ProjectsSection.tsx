import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, ExternalLink, Star } from "lucide-react";
import repos from "@/data/repos.json";

export default function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-16 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 checkerboard-motif opacity-25 pointer-events-none rounded-bl-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="fade-in-section text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tropical-teal/15 text-tropical-teal text-sm font-semibold mb-4">
            Open Source
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Projekti <span className="text-gradient-sunset">zajednice</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Napravljeno od zajednice, za zajednicu. Pravi kod, pravi utjecaj.
          </p>
        </div>

        {repos.length > 0 ? (
          <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {repos.map((repo) => (
              <div
                key={repo.name}
                className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-teal-glow hover:border-tropical-teal/30 transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-navy font-mono text-base group-hover:text-tropical-teal transition-colors">
                    {repo.name}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-navy transition-colors p-1"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-sunset-orange transition-colors p-1"
                        title="Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {repo.description || "Nema opisa."}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {repo.language && (
                    <span className="px-2 py-0.5 rounded-md bg-tropical-teal/12 text-tropical-teal text-xs font-mono font-semibold border border-tropical-teal/20">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded-md bg-sunset-orange/12 text-sunset-orange text-xs font-mono font-semibold border border-sunset-orange/20"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {repo.stars > 0 && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground/70 font-medium">
                    <Star className="w-3 h-3" />
                    {repo.stars}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="fade-in-section text-center py-12">
            <p className="text-muted-foreground">Projekti dolaze uskoro. Pratite nas na GitHubu!</p>
          </div>
        )}

      </div>
    </section>
  );
}
