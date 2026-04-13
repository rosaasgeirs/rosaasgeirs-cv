import Section from "./Section";
import { highlights } from "../data/cvData";
import { useLocale } from "../i18n/LocaleContext";

const descKeys = [
  "highlights.alda.desc",
  "highlights.frodleiksfusi.desc",
] as const;

const dateKeys = [
  "highlights.alda.date",
  "highlights.frodleiksfusi.date",
] as const;

export default function Highlights() {
  const { t } = useLocale();

  return (
    <Section id="highlights">
      <h2 className="section-heading">{t("section.highlights")}</h2>
      <div className="entries">
        {highlights.map((h, i) => (
          <article key={i} className="entry stagger-item">
            <span className="entry-date">{t(dateKeys[i])}</span>
            <h3 className="entry-title">
              <strong>{h.company}</strong> — {h.role}
            </h3>
            <p className="entry-desc">{t(descKeys[i])}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
