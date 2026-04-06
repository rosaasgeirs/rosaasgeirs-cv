import Card from "./Card";
import { sections } from "../data/cvData";

interface CardGridProps {
  onSelect: (sectionId: string) => void;
}

export default function CardGrid({ onSelect }: CardGridProps) {
  return (
    <div className="card-grid">
      {sections.map((s) => (
        <Card
          key={s.id}
          title={s.title}
          summary={s.summary}
          onClick={() => onSelect(s.id)}
        />
      ))}
    </div>
  );
}
