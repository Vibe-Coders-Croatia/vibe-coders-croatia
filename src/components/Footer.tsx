const logo = "/vibecoders.webp";

const navLinks = [
  { label: "O nama", href: "#about" },
  { label: "Projekti", href: "#projects" },
  { label: "Sponzori", href: "#sponsors" },
];

const socials = [
  { label: "Discord", href: "https://discord.gg/mTbs9mNv" },
  { label: "Meetup", href: "https://www.meetup.com/vibe-coders-croatia/" },
  { label: "GitHub", href: "https://github.com/Vibe-Coders-Croatia" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="" className="w-8 h-8 rounded object-cover" />
              <span className="font-display font-[700] text-foreground text-sm">
                Vibe Coders Croatia
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Hrvatska otvorena zajednica buildera, designera i programera.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted-foreground/50 hover:text-sunset-orange transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[10px] text-muted-foreground/30 tracking-[0.2em] uppercase mb-4">
              Navigacija
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* GDPR */}
          <div className="max-w-xs">
            <p className="font-mono text-[10px] text-muted-foreground/30 tracking-[0.2em] uppercase mb-4">
              Privatnost
            </p>
            <p className="text-xs text-muted-foreground/40 leading-relaxed">
              Prikupljamo samo podatke koje dobrovoljno pružite. Nikada ne prodajemo vaše podatke.
              Svi podaci pohranjeni su na EU serverima u skladu s GDPR-om.
              Brisanje možete zatražiti u bilo kojem trenutku putem emaila.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-muted-foreground/30">
            &copy; {new Date().getFullYear()} Vibe Coders Croatia
          </span>
          <span className="font-mono text-[11px] text-muted-foreground/20">
            // napravljeno u Zagrebu
          </span>
        </div>
      </div>
    </footer>
  );
}
