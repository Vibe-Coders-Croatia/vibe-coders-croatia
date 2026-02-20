import logo from "@/assets/vibecoders.png";

const navLinks = [
  { label: "O nama", href: "#about" },
  { label: "Projekti", href: "#projects" },
  { label: "Sponzori", href: "#sponsors" },
];

const socials = [
  { slug: "discord", href: "https://discord.gg/mTbs9mNv", label: "Discord" },
  { slug: "meetup", href: "https://www.meetup.com/vibe-coders-croatia/", label: "Meetup" },
  { slug: "github", href: "https://github.com/Vibe-Coders-Croatia", label: "GitHub" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white/80">
      {/* Main footer */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Vibe Coders Croatia" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <div className="font-bold text-white text-sm">Vibe Coders Croatia</div>
                <div className="text-xs text-golden-sand">Let's build together</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Hrvatska otvorena zajednica buildera, designera i programera.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-sunset-orange/80 transition-colors"
                >
                  <img src={`https://cdn.simpleicons.org/${s.slug}/white`} alt={s.label} className="w-4 h-4" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wide">Navigacija</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-white/60 hover:text-sunset-orange transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* GDPR */}
          <div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/40 leading-relaxed">
              <strong className="text-white/60">Privatnost / GDPR:</strong> Prikupljamo samo podatke koje dobrovoljno pružite. Nikada ne prodajemo vaše podatke. Svi podaci pohranjeni su na EU serverima u skladu s GDPR-om. Brisanje možete zatražiti u bilo kojem trenutku putem emaila.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Vibe Coders Croatia. Sva prava pridržana.</span>
          <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/60 transition-colors">Built with Lovable</a>
          <span className="font-mono text-tropical-teal/60">// napravljeno u 🇭🇷 s ❤️ &amp; ☕</span>
        </div>
      </div>
    </footer>
  );
}
