import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

export default function LanguagePicker() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isEnglish = i18n.language === "en";

  const switchTo = (lang: "hr" | "en") => {
    const hash = location.hash;
    const target = lang === "en" ? `/en${hash}` : `/${hash}`;
    navigate(target);
  };

  return (
    <div className="absolute md:fixed top-4 right-4 md:top-6 md:right-6 z-50 font-mono text-xs tracking-[0.25em] uppercase flex items-center gap-1.5">
      <button
        onClick={() => switchTo("hr")}
        className={`transition-colors px-1 py-1 ${
          !isEnglish
            ? "text-foreground"
            : "text-muted-foreground/40 hover:text-sunset-orange"
        }`}
        aria-label="Hrvatski"
        aria-current={!isEnglish ? "true" : undefined}
      >
        HR
      </button>
      <span className="text-muted-foreground/20">·</span>
      <button
        onClick={() => switchTo("en")}
        className={`transition-colors px-1 py-1 ${
          isEnglish
            ? "text-foreground"
            : "text-muted-foreground/40 hover:text-sunset-orange"
        }`}
        aria-label="English"
        aria-current={isEnglish ? "true" : undefined}
      >
        EN
      </button>
    </div>
  );
}
