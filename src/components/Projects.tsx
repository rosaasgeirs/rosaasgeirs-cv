import Section from "./Section";
import { otherProjects } from "../data/cvData";

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="section-heading">Other Projects &amp; Courses</h2>
      <div className="entries">
        {otherProjects.map((p, i) => (
          <div key={i} className="entry stagger-item">
            <span className="entry-date">{p.dates}</span>
            <p className="entry-desc">{p.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
