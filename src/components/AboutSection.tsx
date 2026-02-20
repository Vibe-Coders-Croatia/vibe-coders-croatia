import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Heart, Code2, Users, Lightbulb } from "lucide-react";

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

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 checkerboard-motif opacity-40 pointer-events-none rounded-bl-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="fade-in-section text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tropical-teal/15 text-tropical-teal text-sm font-semibold mb-4">
            Naša priča
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Za sve koji grade
            <span className="text-gradient-sunset"> digitalno</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Zajednica developera i buildera nastala 2026. u Hrvatskoj.
            Zajedno učimo, dijelimo znanje i guramo jedni druge naprijed.{" "}
            <span className="text-sunset-orange font-medium">Dođi, vidi, gradi.</span>
          </p>
        </div>

        <div className="fade-in-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-warm transition-shadow group"
            >
              <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <v.icon className={`w-6 h-6 ${v.color}`} />
              </div>
              <h3 className="font-bold text-navy mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
