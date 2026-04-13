import Section from "./Section";
import { education } from "../data/cvData";
import { useLocale } from "../i18n/LocaleContext";

const detailKeys = [
  "edu.ru",
  "edu.ui",
  "edu.udsal",
  "edu.mr",
] as const;

export default function Education() {
  const { t } = useLocale();

  return (
    <Section id="education">
      <h2 className="section-heading">{t("section.education")}</h2>
      <div className="timeline">
        {education.map((e, i) => (
          <article key={i} className="entry stagger-item">
            <span className="entry-date">{e.dates}</span>
            <h3 className="entry-title">{e.institution}</h3>
            <p className="entry-desc">{t(detailKeys[i])}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
