import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vibecoders.png";

const navLinks = [
  { label: "O nama", href: "#about" },
  { label: "Projekti", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-light shadow-card border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group"
        >
          <img src={logo} alt="Vibe Coders Croatia" className="w-9 h-9 rounded-lg object-cover" />
          <div className="flex flex-col leading-none">
            <span className={`font-bold text-sm tracking-wide transition-colors ${scrolled ? "text-navy" : "text-white"}`}>
              Vibe Coders
            </span>
            <span className={`text-xs font-medium transition-colors ${scrolled ? "text-sunset-orange" : "text-golden-sand"}`}>
              Croatia
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-sunset-orange/10 hover:text-sunset-orange ${
                scrolled ? "text-navy" : "text-white/90"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-light border-t border-border/60 shadow-navy">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded-md text-sm font-medium text-navy hover:bg-sunset-orange/10 hover:text-sunset-orange transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
