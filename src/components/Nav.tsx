import { useMemo } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
  { href: "about", key: "nav.about" as const },
  { href: "highlights", key: "nav.highlights" as const },
  { href: "education", key: "nav.education" as const },
  { href: "skills", key: "nav.skills" as const },
  { href: "experience", key: "nav.experience" as const },
  { href: "contact", key: "nav.contact" as const },
];

export default function Nav() {
  const { locale, setLocale, t } = useLocale();
  const sectionIds = useMemo(() => navItems.map((n) => n.href), []);
  const active = useActiveSection(sectionIds);

  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={`#${item.href}`}
              className={active === item.href ? "active" : ""}
            >
              {t(item.key)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button
          className="locale-toggle"
          data-locale={locale}
          onClick={() => setLocale(locale === "en" ? "is" : "en")}
          aria-label={
            locale === "en" ? "Skipta yfir á íslensku" : "Switch to English"
          }
          type="button"
        >
          {locale === "en" ? "IS" : "EN"}
        </button>
        <a
          href={`/Rosa_Asgeirsdottir_CV_${locale.toUpperCase()}.pdf`}
          download
          className="nav-download"
          aria-label={t("nav.download")}
        >
          {t("nav.download")}
        </a>
      </div>
    </nav>
  );
}
