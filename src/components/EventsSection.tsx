import { useScrollReveal } from "@/hooks/useScrollReveal";

const pastEvents = [
  { title: "AI Tools for Devs", city: "Zagreb", date: "Jan 2026", attendees: 74 },
  { title: "Docker & k8s Workshop", city: "Rijeka", date: "Dec 2025", attendees: 38 },
  { title: "GraphQL API Design", city: "Online", date: "Nov 2025", attendees: 112 },
  { title: "PostgreSQL Internals", city: "Osijek", date: "Oct 2025", attendees: 41 },
  { title: "React Patterns Deep Dive", city: "Zagreb", date: "Sep 2025", attendees: 88 },
  { title: "Rust for Web Developers", city: "Online", date: "Aug 2025", attendees: 65 },
  { title: "Split Tech Meetup #11", city: "Split", date: "Jul 2025", attendees: 57 },
  { title: "Open Source Sprint", city: "Zagreb", date: "Jun 2025", attendees: 93 },
];

export default function EventsSection() {
  const ref = useScrollReveal();

  return (
    <section id="events" className="py-24 bg-secondary/40 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 checkerboard-motif opacity-30 pointer-events-none rounded-tr-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="fade-in-section text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sunset-orange/15 text-sunset-orange text-sm font-semibold mb-4">
            Eventovi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Prošli <span className="text-gradient-sunset">meetupovi</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pogled unatrag na sve što smo zajedno izgradili diljem Hrvatske i online.
          </p>
        </div>

        <div className="fade-in-section grid grid-cols-2 md:grid-cols-4 gap-4">
          {pastEvents.map((e) => (
            <div
              key={e.title}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-sunset-orange/30 hover:shadow-warm transition-all"
            >
              <div className="font-semibold text-navy text-sm mb-1">{e.title}</div>
              <div className="text-xs text-muted-foreground">{e.city} · {e.date}</div>
              <div className="text-xs text-sunset-orange font-medium mt-1.5">{e.attendees} sudionika</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
