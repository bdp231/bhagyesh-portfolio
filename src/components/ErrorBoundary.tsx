import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0a0a",
            color: "#f4f4f5",
            fontFamily: "sans-serif",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#f43f5e" }}>
            Something went wrong
          </h1>
          <pre
            style={{
              background: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "8px",
              padding: "1rem",
              maxWidth: "600px",
              overflowX: "auto",
              color: "#a1a1aa",
              fontSize: "0.85rem",
              textAlign: "left",
            }}
          >
            {this.state.error?.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
