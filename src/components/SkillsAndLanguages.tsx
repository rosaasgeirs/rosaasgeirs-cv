import Section from "./Section";
import { skills, languages } from "../data/cvData";

export default function SkillsAndLanguages() {
  return (
    <Section id="skills">
      <h2 className="section-heading">Skills &amp; Languages</h2>
      <div className="skill-categories">
        {skills.map((cat) => (
          <div key={cat.label}>
            <div className="skill-category-label">{cat.label}</div>
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
      <p className="spoken-languages">
        {languages.map((l, i) => (
          <span key={l.language}>
            <strong>{l.language}</strong> ({l.level})
            {i < languages.length - 1 && " · "}
          </span>
        ))}
      </p>
    </Section>
  );
}
