import Section from "./Section";
import { otherProjects } from "../data/cvData";
import { useLocale } from "../i18n/LocaleContext";

export default function Projects() {
  const { t } = useLocale();

  return (
    <Section id="projects">
      <h2 className="section-heading">{t("section.projects")}</h2>
      <div className="entries">
        {otherProjects.map((p, i) => (
          <article key={i} className="entry stagger-item">
            <span className="entry-date">{p.dates}</span>
            <p className="entry-desc">{p.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
