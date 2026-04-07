import Section from "./Section";
import { workExperience } from "../data/cvData";

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="section-heading">Work Experience</h2>
      <div className="work-rows">
        {workExperience.map((w, i) => (
          <div key={i} className="work-row stagger-item">
            <span className="entry-date">{w.dates || "\u00A0"}</span>
            <span className="work-role">{w.role}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
