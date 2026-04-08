import Section from "./Section";
import { education } from "../data/cvData";

export default function Education() {
  return (
    <Section id="education">
      <h2 className="section-heading">Education</h2>
      <div className="timeline">
        {education.map((e, i) => (
          <article key={i} className="entry stagger-item">
            <span className="entry-date">{e.dates}</span>
            <h3 className="entry-title">{e.institution}</h3>
            <p className="entry-desc">{e.detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
