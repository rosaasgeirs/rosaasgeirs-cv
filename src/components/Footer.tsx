import Section from "./Section";
import { useLocale } from "../i18n/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <Section id="contact" className="footer-section">
      <div className="section-divider" />
      <div className="footer-name">{t("footer.name")}</div>
      <div className="footer-contact">
        <a href="mailto:rosaasgeirsd@gmail.com">rosaasgeirsd@gmail.com</a>
        <a href="tel:6595205">659 5205</a>
        <span>{t("hero.location")}</span>
      </div>
    </Section>
  );
}
