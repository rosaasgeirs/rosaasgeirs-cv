import Section from "./Section";
import { useLocale } from "../i18n/LocaleContext";

export default function About() {
  const { t } = useLocale();

  return (
    <Section id="about">
      <p className="about-text">{t("bio.text")}</p>
    </Section>
  );
}
