import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguageSync() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const lang = location.pathname.startsWith("/en") ? "en" : "hr";
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [location.pathname, i18n]);

  return null;
}
