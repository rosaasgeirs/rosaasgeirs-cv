import { Link } from "react-router-dom";
import Lighthouse from "./Lighthouse";
import ClearingFlow from "./ClearingFlow";
import FlowBoundary from "./FlowBoundary";
import "./lacuna.css";

const FIGMA_URL =
  "https://www.figma.com/design/JC3BhHdDrNm5GXZ3sBpfn2/Lacuna-Inc.-Memory-Clinic?node-id=0-1&t=Pbv07s35zSFxTGnV-1";

const SWATCHES = [
  { name: "Slate Blue", hex: "#4F6088", role: "Primary" },
  { name: "Light Blue", hex: "#A6B0C4", role: "Air" },
  { name: "Sage", hex: "#819886", role: "Calm" },
  { name: "Orange", hex: "#C8702F", role: "Accent" },
  { name: "Rose", hex: "#A8727A", role: "Soft" },
  { name: "Brick", hex: "#A23D2F", role: "Warmth" },
];

function Shot({ src, alt, kind }: { src: string; alt: string; kind?: string }) {
  return (
    <figure className={"lac-shot" + (kind ? " " + kind : "")}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

export default function Lacuna() {
  return (
    <div className="lacuna">
      <header className="lac-nav">
        <Link to="/" className="lac-back">
          ← Rósa Ásgeirsdóttir
        </Link>
        <a
          href={FIGMA_URL}
          target="_blank"
          rel="noreferrer"
          className="lac-navlink"
        >
          Open the Figma file
        </a>
      </header>

      {/* Hero */}
      <section className="lac-hero">
        <span className="lac-eyebrow">Case study · Concept</span>
        <div className="lac-lockup">
          <Lighthouse size={64} />
          <h1>Lacuna</h1>
        </div>
        <p className="lac-tagline">Find your way back.</p>
        <p className="lac-hero-lead">
          A brand and product concept for the memory-clinic from{" "}
          <em>Eternal Sunshine of the Spotless Mind</em>, the company that
          erases one person from your memory while you sleep.
        </p>

        <dl className="lac-meta">
          <div>
            <dt>Role</dt>
            <dd>Brand, product design, build</dd>
          </div>
          <div>
            <dt>Tools</dt>
            <dd>Figma, React, Claude Code</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>Identity, design system, 3 flows</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>2026</dd>
          </div>
        </dl>
      </section>

      {/* Overview */}
      <section className="lac-section">
        <h2 className="lac-h2">The idea</h2>
        <div className="lac-prose">
          <p>
            Lacuna Inc. is a fictional clinic from the film Eternal Sunshine of the Spotless Mind (2004) which specializes in erasing people from your memory. Here we imagine Lacuna in the present day where they have moved to a digital platform where you can create an account, register a memory clearing and send a notification to the person you are erasing.
          </p>
          <p>
            The palette builds on the film's color scheme where muted cool tones, usually surrounding Joel, meet splashes of brightness and warmth, usually surrounding Clementine. The brand builds on this cool clinical tone which is Lacuna's matter-of-fact approach to the procedure, with hints of warmth and tenderness given the emotional reasons for their service. Clementine's iconic hair evolution is also referenced in the product, with gradients ranging from blue to orange, bright to dull. 
          </p>
        </div>
      </section>

      {/* Brand */}
      <section className="lac-section">
        <h2 className="lac-h2">Brand</h2>
        <div className="lac-swatches">
          {SWATCHES.map((s) => (
            <div className="lac-swatch" key={s.name}>
              <span
                className="lac-chip"
                style={{ background: s.hex }}
                aria-hidden="true"
              />
              <span className="lac-swatch-name">{s.name}</span>
              <span className="lac-swatch-meta">
                {s.role} · {s.hex}
              </span>
            </div>
          ))}
        </div>

        <div className="lac-type">
          <div>
            <p className="lac-type-sample serif">Find your way back.</p>
            <p className="lac-type-label">Fraunces · headlines and quotes</p>
          </div>
          <div>
            <p className="lac-type-sample sans">
              Select the memories you would like us to remove.
            </p>
            <p className="lac-type-label">Inter · interface and body</p>
          </div>
          <div>
            <p className="lac-type-sample mono">
              FILE #LAC-04417 · TARGETED ERASURE
            </p>
            <p className="lac-type-label">IBM Plex Mono · records and codes</p>
          </div>
        </div>

        <a href={FIGMA_URL} target="_blank" rel="noreferrer">
          <Shot
            src="/lacuna/brand-board.png"
            alt="Lacuna brand board: logo, palette, type and voice"
            kind="wide"
          />
        </a>
      </section>

      {/* Flow 1 */}
      <section className="lac-section">
        <span className="lac-flow-tag">Flow 01 · Desktop</span>
        <h2 className="lac-h2">Sign-up</h2>
        <p className="lac-prose-lead">
          Opening a confidential file. A simple sign-up flow featuring a few of the clinic's tag-lines.
        </p>
        <div className="lac-gallery four">
          <Shot src="/lacuna/signup-1.png" alt="Sign-up: welcome" />
          <Shot src="/lacuna/signup-2.png" alt="Sign-up: create account" />
          <Shot src="/lacuna/signup-3.png" alt="Sign-up: verify identity" />
          <Shot src="/lacuna/signup-4.png" alt="Sign-up: file created" />
        </div>
      </section>

      {/* Flow 2 - live */}
      <section className="lac-section live">
        <span className="lac-flow-tag">Flow 02 · Live in React</span>
        <h2 className="lac-h2">Register a memory clearing</h2>
        <p className="lac-prose-lead">
          The core of the product. Name a person, map the memories tied to them,
          consent to the permanence, and book the overnight procedure. This one
          is built and interactive. Try it.
        </p>
        <div className="lac-browser">
          <div className="lac-browser-bar" aria-hidden="true">
            <span className="lac-dots">
              <i /> <i /> <i />
            </span>
            <span className="lac-url">lacuna.co/clearing</span>
          </div>
          <FlowBoundary>
            <ClearingFlow />
          </FlowBoundary>
        </div>
      </section>

      {/* Flow 3 */}
      <section className="lac-section">
        <span className="lac-flow-tag">Flow 03 · Mobile</span>
        <h2 className="lac-h2">You've been forgotten</h2>
        <p className="lac-prose-lead">
          The other side of erasure. A patient learns that someone chose to
          forget them, from the lock-screen alert through to a place of closure.
          The flow moves from night to dawn.
        </p>
        <div className="lac-gallery phones">
          <Shot
            src="/lacuna/mobile-1.png"
            alt="Lock screen notification"
            kind="phone"
          />
          <Shot src="/lacuna/mobile-2.png" alt="The message" kind="phone" />
          <Shot src="/lacuna/mobile-3.png" alt="The reveal" kind="phone" />
          <Shot src="/lacuna/mobile-4.png" alt="Closure at dawn" kind="phone" />
        </div>

        <h3 className="lac-h3">And if they have no account</h3>
        <p className="lac-prose-lead">
          The same notice, sent as an email. The Code requires that everyone is
          told, account or not and is a lead capture as well if the person erased would like to create and account themselves and erase the person back.
        </p>
        <Shot
          src="/lacuna/email.png"
          alt="Erasure notice email for someone without an account"
          kind="email"
        />
      </section>

      <footer className="lac-footer">
        <Lighthouse size={32} />
        <p>
          Lacuna is a fictional company from{" "}
          <em>Eternal Sunshine of the Spotless Mind</em>.
        </p>
        <Link to="/" className="lac-back">
          ← Back to my CV
        </Link>
      </footer>
    </div>
  );
}
