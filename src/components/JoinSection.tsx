import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Svakodnevni chat, kanali za pomoć i najave",
    href: "https://discord.gg/mTbs9mNv",
    color: "gradient-sunset",
    label: "Pridruži se na Discord",
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Doprinesi našim open-source projektima",
    href: "#",
    color: "bg-navy",
    label: "Pogledaj repozitorije",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    description: "Profesionalne objave i prilike za posao",
    href: "#",
    color: "bg-tropical-teal",
    label: "Zaprati nas",
  },
  {
    icon: Twitter,
    name: "Twitter / X",
    description: "Brze objave, memeovi i tech rasprave",
    href: "#",
    color: "bg-sunset-purple",
    label: "Zaprati @VibeCodersHR",
  },
];

const cities = ["Zagreb", "Split", "Rijeka", "Osijek", "Drugo"];
const experienceLevels = ["Student / Učim", "Junior (0–2 god.)", "Mid (2–5 god.)", "Senior (5+ god.)", "Engineering Lead"];
const interests = ["Web Dev", "Mobile", "Backend / API", "DevOps / Cloud", "AI / ML", "Open Source", "Rust / Systems", "Game Dev"];

export default function JoinSection() {
  const ref = useScrollReveal();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    level: "",
    interests: [] as string[],
  });
  const [formSent, setFormSent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) setNewsletterSent(true);
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.city && formData.level) setFormSent(true);
  };

  return (
    <section id="join" className="py-24 bg-secondary/40 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 checkerboard-motif opacity-25 pointer-events-none rounded-tl-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="fade-in-section text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sunset-orange/15 text-sunset-orange text-sm font-semibold mb-4">
            Zajednica
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Uhvati <span className="text-gradient-sunset">vibe</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Postani dio najaktivnije zajednice za buildere i kodere u Hrvatskoj. Odaberi svoj kanal, pretplati se na novosti ili se predstavi.
          </p>
        </div>

        {/* Community channels */}
        <div className="fade-in-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              className="bg-card border border-border rounded-2xl p-5 shadow-card hover:shadow-warm hover:border-sunset-orange/30 transition-all group flex flex-col gap-3"
            >
              <div className={`w-10 h-10 rounded-xl ${ch.color} flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}>
                <ch.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-navy text-sm mb-0.5">{ch.name}</div>
                <div className="text-xs text-muted-foreground">{ch.description}</div>
              </div>
              <span className="text-xs font-semibold text-sunset-orange group-hover:underline mt-auto">
                {ch.label} →
              </span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div className="fade-in-section bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl gradient-teal flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-navy text-xl">Newsletter</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-5">
              Mjesečni pregled hrvatskih tech eventova, open source projekata i highlightova zajednice.
            </p>

            {newsletterSent ? (
              <div className="flex items-center gap-3 text-tropical-teal font-medium">
                <CheckCircle className="w-5 h-5" />
                Pretplaćen/a si! Provjeri inbox.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-navy placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-sunset-orange/50"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl gradient-sunset text-white font-semibold text-sm shadow-warm hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Pretplati se
                </button>
              </form>
            )}
          </div>

          {/* Interest form */}
          <div className="fade-in-section bg-card border border-border rounded-2xl p-8 shadow-card">
            <h3 className="font-bold text-navy text-xl mb-1">Predstavi se</h3>
            <p className="text-muted-foreground text-sm mb-5">Reci nam nešto o sebi i spojit ćemo te s pravim ljudima.</p>

            {formSent ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <CheckCircle className="w-10 h-10 text-tropical-teal" />
                <div className="font-bold text-navy">Hvala! Javimo ti se uskoro.</div>
                <div className="text-sm text-muted-foreground">Dobrodošao/la u Vibe Coders Croatia 🎉</div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Tvoje ime"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-navy placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-sunset-orange/50"
                  required
                />
                <select
                  value={formData.city}
                  onChange={(e) => setFormData((p) => ({ ...p, city: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sunset-orange/50"
                  required
                >
                  <option value="">Odaberi grad</option>
                  {cities.map((c) => <option key={c}>{c}</option>)}
                </select>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData((p) => ({ ...p, level: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-navy text-sm focus:outline-none focus:ring-2 focus:ring-sunset-orange/50"
                  required
                >
                  <option value="">Razina iskustva</option>
                  {experienceLevels.map((l) => <option key={l}>{l}</option>)}
                </select>
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-2">Interesi (odaberi sve što te zanima)</div>
                  <div className="flex flex-wrap gap-1.5">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                          formData.interests.includes(interest)
                            ? "bg-tropical-teal text-white border-tropical-teal"
                            : "bg-background border-border text-navy hover:border-tropical-teal/50"
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl gradient-sunset text-white font-semibold shadow-warm hover:opacity-90 transition-opacity"
                >
                  Pridruži se zajednici
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
