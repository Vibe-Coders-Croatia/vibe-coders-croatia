import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguageSync() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const lang = location.pathname === "/en" || location.pathname.startsWith("/en/") ? "en" : "hr";
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [location.pathname, i18n]);

  // Update meta tags when language changes
  useEffect(() => {
    const lang = i18n.language;
    const url = lang === "en" ? "https://vibecoders.hr/en" : "https://vibecoders.hr/";
    const description = t("seo.description");
    const title = t("seo.title");

    // Canonical & og:url
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.setAttribute("content", url);

    // Descriptions
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute("content", description);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')?.setAttribute("content", description);

    // Titles
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute("content", title);
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')?.setAttribute("content", title);

    // og:locale
    document.querySelector<HTMLMetaElement>('meta[property="og:locale"]')?.setAttribute("content", lang === "en" ? "en_US" : "hr_HR");
  }, [i18n.language, t]);

  return null;
}
