import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, ExternalLink } from "lucide-react";

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

        <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-teal-glow hover:border-tropical-teal/30 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-navy font-mono text-base group-hover:text-tropical-teal transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-navy transition-colors p-1"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-sunset-orange transition-colors p-1"
                      title="Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-tropical-teal/12 text-tropical-teal text-xs font-mono font-semibold border border-tropical-teal/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-xs text-muted-foreground/70 font-medium">{project.author}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
