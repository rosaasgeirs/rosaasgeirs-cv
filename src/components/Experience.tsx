import Section from "./Section";
import { workExperience } from "../data/cvData";
import { useLocale } from "../i18n/LocaleContext";

export default function Experience() {
  const { t } = useLocale();

  return (
    <Section id="experience">
      <h2 className="section-heading">{t("section.experience")}</h2>
      <div className="work-rows">
        {workExperience.map((w, i) => (
          <div key={i} className="work-row stagger-item">
            <span className="entry-date">{w.dates || "\u00A0"}</span>
            <div className="role-and-details">
              <span className="work-role">{w.role}</span>
              <span className="work-details">
                {w.detailKey ? t(w.detailKey) : "\u00A0"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
