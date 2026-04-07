import Section from "./Section";

export default function Footer() {
  return (
    <Section id="contact" className="footer-section">
      <div className="section-divider" />
      <div className="footer-name">Rósa Ásgeirsdóttir</div>
      <div className="footer-contact">
        <a href="mailto:rosaasgeirsd@gmail.com">rosaasgeirsd@gmail.com</a>
        <a href="tel:6595205">659 5205</a>
        <span>Reykjavík, Iceland</span>
      </div>
    </Section>
  );
}
