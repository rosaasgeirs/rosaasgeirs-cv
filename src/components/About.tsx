import Section from "./Section";
import { bio } from "../data/cvData";

export default function About() {
  return (
    <Section id="about">
      <p className="about-text">{bio}</p>
    </Section>
  );
}
