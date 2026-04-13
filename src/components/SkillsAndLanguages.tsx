import Section from "./Section";
import { skills, languages } from "../data/cvData";
import { useLocale } from "../i18n/LocaleContext";

const categoryKeys = {
  Frontend: "skills.frontend",
  Languages: "skills.languages",
  Design: "skills.design",
} as const;

const levelKeys = {
  Native: "lang.native",
  Fluent: "lang.fluent",
} as const;

export default function SkillsAndLanguages() {
  const { t } = useLocale();

  return (
    <Section id="skills">
      <h2 className="section-heading">{t("section.skills")}</h2>
      <div className="skill-categories">
        {skills.map((cat) => (
          <div key={cat.label}>
            <div className="skill-category-label">
              {t(categoryKeys[cat.label as keyof typeof categoryKeys])}
            </div>
            <ul className="skill-pills">
              {cat.items.map((s) => (
                <li key={s} className="skill-pill">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h3 className="skill-category-label" style={{ marginTop: "2rem" }}>
        {t("section.spokenLanguages")}
      </h3>
      <ul className="spoken-languages">
        {languages.map((l) => (
          <li key={l.language}>
            <strong>{l.language}</strong> — {t(levelKeys[l.level as keyof typeof levelKeys])}
          </li>
        ))}
      </ul>
    </Section>
  );
}
