import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Users, Calendar } from "lucide-react";

const events = [
  {
    id: 1,
    title: "React & Beyond #8",
    date: "Siječanj 2025.",
    city: "Zagreb",
    attendees: 74,
    tags: ["React", "TypeScript"],
    recap: "Tri predavanja o React Server Components, TanStack Query v5 i micro-frontendovima.",
  },
  {
    id: 2,
    title: "AI & Dev Tools Nite",
    date: "Studeni 2024.",
    city: "Zagreb",
    attendees: 89,
    tags: ["AI", "LLM", "Dev Tools"],
    recap: "Živahna panel diskusija o Copilotu, Cursoru i budućnosti programiranja s AI-jem.",
  },
  {
    id: 3,
    title: "Split Coastal Hack",
    date: "Rujan 2024.",
    city: "Split",
    attendees: 52,
    tags: ["Hackathon", "Open Source"],
    recap: "48-satni hackathon u Splitu — nastao jadran-weather projekt i meetup-platform.",
  },
  {
    id: 4,
    title: "Rust & Systems Night",
    date: "Srpanj 2024.",
    city: "Zagreb",
    attendees: 61,
    tags: ["Rust", "Systems"],
    recap: "Deep dive u Rust ownership, async i WebAssembly s keynoteom Ante Babića.",
  },
  {
    id: 5,
    title: "Osijek Dev Meetup #2",
    date: "Lipanj 2024.",
    city: "Osijek",
    attendees: 38,
    tags: ["Community", "Mixed"],
    recap: "Lokalni builderi, student projekti i živahni lightning talkovi o DevOps trendovima.",
  },
  {
    id: 6,
    title: "Open Source Sprint",
    date: "Travanj 2024.",
    city: "Zagreb",
    attendees: 45,
    tags: ["Open Source", "Collaboration"],
    recap: "Zajednički sprint na hr-jobs-api i balkancli projektima — 28 merganih PR-ova u jednoj noći.",
  },
  {
    id: 7,
    title: "Startup & Builders Nite",
    date: "Veljača 2024.",
    city: "Zagreb",
    attendees: 96,
    tags: ["Startup", "Product"],
    recap: "Najveći event do tada — pitch natjecanje, investor panel i umrežavanje hrvatske startup scene.",
  },
  {
    id: 8,
    title: "Kickoff Meetup 2024.",
    date: "Siječanj 2024.",
    city: "Zagreb",
    attendees: 67,
    tags: ["Community", "New Year"],
    recap: "Retrospektiva 2023. i roadmapa za 2024. godinu — od 80 na 420+ članova.",
  },
];

const cityColors: Record<string, string> = {
  Zagreb: "text-sunset-orange bg-sunset-orange/10",
  Split: "text-tropical-teal bg-tropical-teal/10",
  Osijek: "text-golden-sand bg-golden-sand/20",
};

export default function EventsSection() {
  const ref = useScrollReveal();

  return (
    <section id="events" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 checkerboard-motif opacity-25 pointer-events-none rounded-tl-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Heading */}
        <div className="fade-in-section text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sunset-orange/15 text-sunset-orange text-sm font-semibold mb-4">
            Naši eventi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Meetupi i <span className="text-gradient-sunset">hackathoni</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            38 eventova od 2022. — svaki jedan korak prema snažnijoj hrvatskoj tech zajednici.
          </p>
        </div>

        {/* Event grid */}
        <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {events.map((event) => {
            const cityClass = cityColors[event.city] ?? "text-sunset-purple bg-sunset-purple/10";
            return (
              <div
                key={event.id}
                className="bg-card rounded-2xl p-5 border border-border shadow-card hover:shadow-warm hover:border-sunset-orange/30 transition-all group flex flex-col gap-3"
              >
                {/* City badge */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${cityClass}`}>
                    <MapPin className="w-3 h-3" />
                    {event.city}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-navy text-sm leading-snug group-hover:text-sunset-orange transition-colors">
                  {event.title}
                </h3>

                {/* Recap */}
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {event.recap}
                </p>

                {/* Tags + Attendees */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {event.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground/70 font-medium shrink-0 ml-2">
                    <Users className="w-3 h-3" />
                    {event.attendees}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to Meetup */}
        <div className="fade-in-section text-center">
          <a
            href="https://www.meetup.com/vibe-coders-croatia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#ED1C40] text-white font-semibold text-base shadow-warm hover:bg-[#D1173A] transition-all hover:scale-105 active:scale-100"
          >
            <img src="https://cdn.simpleicons.org/meetup/white" alt="" className="w-5 h-5" />
            Svi eventi na Meetup.com
          </a>
        </div>
      </div>
    </section>
  );
}
