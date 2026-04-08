import Section from "./Section";
import { highlights } from "../data/cvData";

export default function Highlights() {
  return (
    <Section id="highlights">
      <h2 className="section-heading">Highlights</h2>
      <div className="entries">
        {highlights.map((h, i) => (
          <article key={i} className="entry stagger-item">
            <span className="entry-date">{h.date}</span>
            <h3 className="entry-title">
              <strong>{h.company}</strong> — {h.role}
            </h3>
            {h.description && <p className="entry-desc">{h.description}</p>}
          </article>
        ))}
      </div>
    </Section>
  );
}
