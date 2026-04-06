import { useEffect, useRef } from "react";
import {
  bio,
  highlights,
  education,
  skills,
  languages,
  otherProjects,
  workExperience,
  sections,
} from "../data/cvData";

interface ModalProps {
  sectionId: string;
  onClose: () => void;
}

export default function Modal({ sectionId, onClose }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const section = sections.find((s) => s.id === sectionId);

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleBackdropClick}>
      <div className="modal" role="dialog" aria-label={section?.title}>
        <button className="modal-close" onClick={onClose} type="button" aria-label="Close">
          &times;
        </button>
        <h2 className="modal-title">{section?.title}</h2>
        <div className="modal-content">{renderSection(sectionId)}</div>
      </div>
    </div>
  );
}

function renderSection(id: string) {
  switch (id) {
    case "bio":
      return <p className="bio-text">{bio}</p>;

    case "highlights":
      return (
        <div className="entries">
          {highlights.map((h, i) => (
            <div key={i} className="entry">
              <span className="entry-date">{h.date}</span>
              <h3>
                <strong>{h.company}</strong> — {h.role}
              </h3>
              {h.description && <p>{h.description}</p>}
            </div>
          ))}
        </div>
      );

    case "education":
      return (
        <div className="entries">
          {education.map((e, i) => (
            <div key={i} className="entry">
              <span className="entry-date">{e.dates}</span>
              <h3>{e.institution}</h3>
              <p>{e.detail}</p>
            </div>
          ))}
        </div>
      );

    case "skills":
      return (
        <ul className="skill-tags">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      );

    case "languages":
      return (
        <ul className="lang-list">
          {languages.map((l) => (
            <li key={l.language}>
              <strong>{l.language}</strong> — {l.level}
            </li>
          ))}
        </ul>
      );

    case "projects":
      return (
        <div className="entries">
          {otherProjects.map((p, i) => (
            <div key={i} className="entry">
              <span className="entry-date">{p.dates}</span>
              <p>{p.detail}</p>
            </div>
          ))}
        </div>
      );

    case "experience":
      return (
        <div className="entries">
          {workExperience.map((w, i) => (
            <div key={i} className="work-row">
              {w.dates && <span className="entry-date">{w.dates}</span>}
              <span>{w.role}</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}
