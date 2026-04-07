import type { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = "", children }: SectionProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id={id} ref={ref} className={`cv-section ${className}`}>
      <div className="section-inner">{children}</div>
    </section>
  );
}
