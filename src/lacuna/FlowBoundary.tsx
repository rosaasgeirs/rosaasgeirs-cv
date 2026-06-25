import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

// Keeps a runtime error inside the live demo from taking down the whole
// case-study page. Shows a small recoverable fallback instead.
export default class FlowBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Lacuna flow error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="lf-shell" style={{ alignItems: "center" }}>
          <div className="lf-body">
            <div className="lf-col centered" style={{ maxWidth: "22rem" }}>
              <h2 className="lf-h1 sm">The demo hit a snag.</h2>
              <p className="lf-sub">
                Something went wrong inside the prototype. You can restart it
                without reloading the page.
              </p>
              <button
                className="lf-btn primary"
                onClick={() => this.setState({ hasError: false })}
              >
                Restart the demo
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
