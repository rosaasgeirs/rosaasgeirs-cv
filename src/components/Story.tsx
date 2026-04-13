import Section from "./Section";
import { useLocale } from "../i18n/LocaleContext";

export default function About() {
  const { t } = useLocale();
  const paragraphs = t("story.text").split("\n\n");

  return (
    <Section id="bio">
      {paragraphs.map((p, i) => (
        <p key={i} className="story-paragraph">
          {p}
        </p>
      ))}
    </Section>
  );
}
