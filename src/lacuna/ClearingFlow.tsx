import { useState } from "react";
import Lighthouse from "./Lighthouse";

type Memory = {
  id: string;
  title: string;
  note: string;
  meta: string;
  selected: boolean;
};

const INITIAL_MEMORIES: Memory[] = [
  {
    id: "montauk",
    title: "The first clear morning",
    note: "The frozen Charles River, the first night you ran away.",
    meta: "DEC 2002 · HIGH INTENSITY",
    selected: true,
  },
  {
    id: "car",
    title: "The night you argued in the car",
    note: "Rain, the long drive home, the silence after.",
    meta: "OCT 2003 · HIGH INTENSITY",
    selected: true,
  },
  {
    id: "bookstore",
    title: "The bookstore, the orange hoodie",
    note: "She found you between the shelves and never left.",
    meta: "JAN 2003 · MEDIUM",
    selected: false,
  },
  {
    id: "valentine",
    title: "Valentine's, the tantrum",
    note: "The diner, the things you both said.",
    meta: "FEB 2003 · HIGH INTENSITY",
    selected: true,
  },
  {
    id: "lake",
    title: "Walking on the frozen lake",
    note: "Cold air, her hand, almost nothing said.",
    meta: "FEB 2003 · LOW INTENSITY",
    selected: false,
  },
  {
    id: "beach",
    title: "The broken house on the beach",
    note: "The cold floor, the morning light through the boards.",
    meta: "FEB 2003 · MEDIUM",
    selected: false,
  },
];

type Step = "begin" | "who" | "memories" | "confirm" | "scheduled";
const ORDER: Step[] = ["begin", "who", "memories", "confirm", "scheduled"];

export default function ClearingFlow() {
  const [step, setStep] = useState<Step>("begin");
  const [person, setPerson] = useState("Clementine Kruczynski");
  const [relationship, setRelationship] = useState("Former partner");
  const [memories, setMemories] = useState(INITIAL_MEMORIES);
  const [consentPermanent, setConsentPermanent] = useState(false);
  const [consentHome, setConsentHome] = useState(false);

  const firstName = person.trim().split(" ")[0] || "them";
  const selected = memories.filter((m) => m.selected);
  const go = (s: Step) => setStep(s);
  const stepIndex = ORDER.indexOf(step);

  function toggleMemory(id: string) {
    setMemories((prev) =>
      prev.map((m) => (m.id === id ? { ...m, selected: !m.selected } : m)),
    );
  }

  function restart() {
    setMemories(INITIAL_MEMORIES);
    setConsentPermanent(false);
    setConsentHome(false);
    go("begin");
  }

  return (
    <div className="lf-shell" data-step={step}>
      <header className="lf-topbar">
        <div className="lf-brand">
          <Lighthouse size={26} />
          <span className="lf-wordmark">Lacuna</span>
        </div>
        <div className="lf-chip">
          <span className="lf-avatar" aria-hidden="true" />
          <span>Joel Barish</span>
        </div>
      </header>

      <div className="lf-body" key={step}>
        {step === "begin" && <Begin onBegin={() => go("who")} />}

        {step === "who" && (
          <Who
            person={person}
            relationship={relationship}
            onPerson={setPerson}
            onRelationship={setRelationship}
            onBack={() => go("begin")}
            onNext={() => go("memories")}
          />
        )}

        {step === "memories" && (
          <Memories
            person={firstName}
            memories={memories}
            selectedCount={selected.length}
            onToggle={toggleMemory}
            onSelectAll={() =>
              setMemories((prev) => prev.map((m) => ({ ...m, selected: true })))
            }
            onBack={() => go("who")}
            onNext={() => go("confirm")}
          />
        )}

        {step === "confirm" && (
          <Confirm
            person={person}
            relationship={relationship}
            count={selected.length}
            consentPermanent={consentPermanent}
            consentHome={consentHome}
            onConsentPermanent={setConsentPermanent}
            onConsentHome={setConsentHome}
            onBack={() => go("memories")}
            onConfirm={() => go("scheduled")}
          />
        )}

        {step === "scheduled" && (
          <Scheduled
            person={person}
            count={selected.length}
            onRestart={restart}
          />
        )}
      </div>

      {stepIndex > 0 && stepIndex < 4 && (
        <span className="lf-progress-hint" aria-hidden="true" />
      )}
    </div>
  );
}

/* ---- shared atoms ---- */

function Stepper({ label, filled }: { label: string; filled: number }) {
  return (
    <div className="lf-stepper">
      <span className="lf-eyebrow">{label}</span>
      <div className="lf-bar">
        {[0, 1, 2].map((i) => (
          <span key={i} className={i < filled ? "is-on" : ""} />
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  helper,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  helper?: string;
  type?: string;
}) {
  return (
    <label className="lf-field">
      <span className="lf-field-label">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="lf-input"
      />
      {helper && <span className="lf-field-helper">{helper}</span>}
    </label>
  );
}

/* ---- steps ---- */

function Begin({ onBegin }: { onBegin: () => void }) {
  return (
    <div className="lf-col" style={{ maxWidth: "34rem" }}>
      <span className="lf-eyebrow accent">New request · Memory clearing</span>
      <h2 className="lf-h1">Register a memory clearing</h2>
      <p className="lf-lead">
        We map the memories tied to one person and remove them while you sleep.
        The process is painless, but the outcome is permanent. Take your time.
        You can pause at any step.
      </p>
      <div className="lf-callout">
        Once a procedure begins, the selected memories cannot be recovered.
        There is no undo after the night of the appointment.
      </div>
      <div className="lf-actions">
        <button className="lf-btn primary block" onClick={onBegin}>
          Begin registration process
        </button>
      </div>
    </div>
  );
}

function Who({
  person,
  relationship,
  onPerson,
  onRelationship,
  onBack,
  onNext,
}: {
  person: string;
  relationship: string;
  onPerson: (v: string) => void;
  onRelationship: (v: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="lf-col" style={{ maxWidth: "32rem" }}>
      <Stepper label="Step 1 of 3 · The person" filled={1} />
      <h2 className="lf-h1">Who would you like us to remove?</h2>
      <p className="lf-sub">
        Name the person you want to clear. Everything we remove will be tied to
        them alone.
      </p>
      <Field
        label="Their name"
        value={person}
        onChange={onPerson}
        helper="As you knew them."
      />
      <Field
        label="Your relationship"
        value={relationship}
        onChange={onRelationship}
        helper="This helps us recognise associated memories."
      />
      <div className="lf-actions">
        <button className="lf-btn ghost" onClick={onBack}>
          Back
        </button>
        <button
          className="lf-btn primary grow"
          onClick={onNext}
          disabled={!person.trim()}
        >
          Find memories
        </button>
      </div>
    </div>
  );
}

function Memories({
  person,
  memories,
  selectedCount,
  onToggle,
  onSelectAll,
  onBack,
  onNext,
}: {
  person: string;
  memories: Memory[];
  selectedCount: number;
  onToggle: (id: string) => void;
  onSelectAll: () => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="lf-col" style={{ maxWidth: "44rem" }}>
      <Stepper label="Step 2 of 3 · The memories" filled={2} />
      <div className="lf-row-between">
        <div>
          <h2 className="lf-h1 sm">Select the memories to remove</h2>
          <p className="lf-sub">
            We found {memories.length} memories tied to {person}. Choose what to
            let go.
          </p>
        </div>
        <button className="lf-link" onClick={onSelectAll}>
          Select all
        </button>
      </div>

      <ul className="lf-memories">
        {memories.map((m) => (
          <li key={m.id}>
            <button
              type="button"
              className={"lf-memory" + (m.selected ? " is-selected" : "")}
              aria-pressed={m.selected}
              onClick={() => onToggle(m.id)}
            >
              <span className="lf-check" aria-hidden="true">
                {m.selected ? "✓" : ""}
              </span>
              <span className="lf-memory-text">
                <span className="lf-memory-title">{m.title}</span>
                <span className="lf-memory-note">{m.note}</span>
                <span className="lf-memory-meta">{m.meta}</span>
              </span>
              <span className="lf-memory-thumb" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <div className="lf-actions spread">
        <span className="lf-count">
          {selectedCount} {selectedCount === 1 ? "memory" : "memories"} selected
        </span>
        <span className="lf-actions">
          <button className="lf-btn ghost" onClick={onBack}>
            Back
          </button>
          <button
            className="lf-btn primary"
            onClick={onNext}
            disabled={selectedCount === 0}
          >
            Continue
          </button>
        </span>
      </div>
    </div>
  );
}

function Confirm({
  person,
  relationship,
  count,
  consentPermanent,
  consentHome,
  onConsentPermanent,
  onConsentHome,
  onBack,
  onConfirm,
}: {
  person: string;
  relationship: string;
  count: number;
  consentPermanent: boolean;
  consentHome: boolean;
  onConsentPermanent: (v: boolean) => void;
  onConsentHome: (v: boolean) => void;
  onBack: () => void;
  onConfirm: () => void;
}) {
  const ready = consentPermanent && consentHome && count > 0;
  return (
    <div className="lf-col" style={{ maxWidth: "32rem" }}>
      <Stepper label="Step 3 of 3 · Confirm" filled={3} />
      <h2 className="lf-h1">Confirm and schedule</h2>

      <div className="lf-summary">
        <span className="lf-summary-num">{count}</span>
        <span>
          <strong>{count === 1 ? "memory" : "memories"} to be removed</strong>
          <span className="lf-summary-sub">
            {person} · {relationship}
          </span>
        </span>
      </div>

      <Consent
        checked={consentPermanent}
        onChange={onConsentPermanent}
        label="I understand these memories will be permanently erased and cannot be recovered."
      />
      <Consent
        checked={consentHome}
        onChange={onConsentHome}
        label="I consent to a Lacuna technician entering my home on the scheduled night."
      />

      <div className="lf-field">
        <span className="lf-field-label">Procedure date</span>
        <div className="lf-static">
          <span>Friday, 14 February · 11:00 PM</span>
          <span className="lf-static-tag">Assigned</span>
        </div>
        <span className="lf-field-helper">
          Our technicians work overnight while you sleep. The next available
          night is assigned to you automatically.
        </span>
      </div>

      <div className="lf-actions">
        <button className="lf-btn ghost" onClick={onBack}>
          Back
        </button>
        <button
          className="lf-btn primary grow"
          onClick={onConfirm}
          disabled={!ready}
        >
          Confirm procedure
        </button>
      </div>
    </div>
  );
}

function Consent({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      className={"lf-consent" + (checked ? " is-on" : "")}
      aria-pressed={checked}
      onClick={() => onChange(!checked)}
    >
      <span className="lf-consent-box" aria-hidden="true">
        {checked ? "✓" : ""}
      </span>
      <span>{label}</span>
    </button>
  );
}

function Scheduled({
  person,
  count,
  onRestart,
}: {
  person: string;
  count: number;
  onRestart: () => void;
}) {
  const surname = person.trim().split(" ").slice(-1)[0] || "";
  const initials =
    (person.trim()[0] || "") + (surname ? "." : "") + " " + surname;
  return (
    <div className="lf-col centered" style={{ maxWidth: "30rem" }}>
      <Lighthouse size={60} />
      <span className="lf-eyebrow muted">Procedure scheduled</span>
      <h2 className="lf-display">We'll see you that night.</h2>

      <div className="lf-record">
        <span className="lf-eyebrow accent">File #LAC-04417</span>
        <hr />
        <dl>
          <div>
            <dt>Procedure</dt>
            <dd>Targeted erasure</dd>
          </div>
          <div>
            <dt>Subject</dt>
            <dd>{initials.toUpperCase()}</dd>
          </div>
          <div>
            <dt>Memories</dt>
            <dd>{count} selected</dd>
          </div>
          <div>
            <dt>Appointment</dt>
            <dd>14 FEB 2004 · 23:00</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd className="ok">● Scheduled</dd>
          </div>
        </dl>
      </div>

      <p className="lf-sub">
        On the night of your appointment, gather everything that reminds you of
        her. Photographs, gifts, old letters. Leave it out for our technicians,
        and the work will be done by morning.
      </p>
      <button className="lf-btn primary block" onClick={onRestart}>
        Back to your file
      </button>
    </div>
  );
}
