import { useLocale } from "../i18n/LocaleContext";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="cv-section hero-section">
      <div className="section-inner">
        <div className="hero-layout">
          <div className="hero-text">
            <h1 className="hero-name">
              Rósa
              <br />
              Ásgeirsdóttir
            </h1>
            <span className="hero-dash" aria-hidden="true">ㅡ</span>
            <p className="hero-subtitle">{t("hero.subtitle")}</p>
            <div className="hero-contact">
              <a href="mailto:rosaasgeirsd@gmail.com">rosaasgeirsd@gmail.com</a>
              <a href="https://www.linkedin.com/in/rosa-asgeirsdottir/">
                linkedin/rosa-asgeirsdottir
              </a>
              <span>{t("hero.location")}</span>
            </div>
          </div>
          <div className="hero-photo-wrapper">
            <img
              src="/Rosa.jpg"
              alt="Rósa Ásgeirsdóttir"
              className="hero-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
