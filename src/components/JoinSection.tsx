import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Send, MessageCircle, Github, Users } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Primarni hub zajednice — channeli za svaku tehnologiju, job board i random memes.",
    cta: "Pridruži se Discordu",
    href: "https://discord.gg/mTbs9mNv",
    color: "bg-[#5865F2]",
    hover: "hover:bg-[#4752C4]",
    iconSrc: "https://cdn.simpleicons.org/discord/white",
  },
  {
    icon: Users,
    name: "Meetup",
    description: "RSVP za nadolazeće meetupe, hackathone i radionice širom Hrvatske.",
    cta: "Prati na Meetup.com",
    href: "https://www.meetup.com/vibe-coders-croatia/",
    color: "bg-[#ED1C40]",
    hover: "hover:bg-[#D1173A]",
    iconSrc: "https://cdn.simpleicons.org/meetup/white",
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Contribuiraj na naše open-source projekte. Svaki PR je dobrodošao.",
    cta: "GitHub organizacija",
    href: "#",
    color: "bg-navy",
    hover: "hover:bg-navy/80",
    iconSrc: "https://cdn.simpleicons.org/github/white",
  },
];

export default function JoinSection() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", city: "", intro: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="join" className="py-16 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 checkerboard-motif opacity-30 pointer-events-none rounded-br-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-tropical-teal/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Heading */}
        <div className="fade-in-section text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tropical-teal/15 text-tropical-teal text-sm font-semibold mb-4">
            Postani dio zajednice
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Pridruži se <span className="text-gradient-sunset">Vibe Coders Croatia</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Besplatno, otvoreno, bez gatekeepinga. Odaberi kanal koji ti odgovara ili nas kontaktiraj direktno.
          </p>
        </div>

        {/* Community channels */}
        <div className="fade-in-section grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {channels.map((ch) => (
            <div
              key={ch.name}
              className="bg-card rounded-2xl p-6 border border-border shadow-card flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${ch.color} flex items-center justify-center shrink-0`}>
                  <img src={ch.iconSrc} alt={ch.name} className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy text-base">{ch.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{ch.description}</p>
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl ${ch.color} ${ch.hover} text-white font-semibold text-sm transition-all hover:scale-105 active:scale-100`}
              >
                {ch.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Intro / contact form */}
        <div className="fade-in-section max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-tropical-teal/15 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Dobrodošao/la!</h3>
                <p className="text-muted-foreground text-sm">
                  Hvala na interesu! Javit ćemo se na <strong>{form.email}</strong> uskoro.
                  <br />U međuvremenu, hop in na Discord! 🚀
                </p>
                <a
                  href="https://discord.gg/mTbs9mNv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-sm transition-all hover:scale-105"
                >
                  <img src="https://cdn.simpleicons.org/discord/white" alt="" className="w-4 h-4" />
                  Otvori Discord
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-navy mb-1">Predstavi se 👋</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Kratka poruka je dovoljna — javit ćemo se i uključiti te u zajednicu.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5">
                        Ime i prezime <span className="text-warm-coral">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Ana Horvat"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1.5">
                        Email <span className="text-warm-coral">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="ana@primjer.hr"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5">Grad</label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                      placeholder="Zagreb, Split, Osijek…"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1.5">Kratki intro</label>
                    <textarea
                      rows={3}
                      value={form.intro}
                      onChange={(e) => setForm((f) => ({ ...f, intro: e.target.value }))}
                      placeholder="Čime se baviš, što kodiš, što te zanima u zajednici…"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sunset-orange hover:bg-sunset-orange/90 text-white font-semibold text-sm shadow-warm transition-all hover:scale-[1.02] active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Šaljem…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Pošalji poruku
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground/70 text-center">
                    Nema spama. Podaci se koriste samo za koordinaciju zajednice i brišu se na zahtjev. (GDPR ✓)
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
