interface CardProps {
  title: string;
  summary: string;
  onClick: () => void;
}

export default function Card({ title, summary, onClick }: CardProps) {
  return (
    <button className="card" onClick={onClick} type="button">
      <h2 className="card-title">{title}</h2>
      <p className="card-summary">{summary}</p>
      <span className="card-arrow" aria-hidden="true">
        &rarr;
      </span>
    </button>
  );
}
