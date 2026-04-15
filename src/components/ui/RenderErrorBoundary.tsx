import { Component, type ErrorInfo, type ReactNode } from "react";

interface RenderErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface RenderErrorBoundaryState {
  hasError: boolean;
}

export default class RenderErrorBoundary extends Component<
  RenderErrorBoundaryProps,
  RenderErrorBoundaryState
> {
  state: RenderErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): RenderErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Keep production UX stable by rendering fallback UI.
    void error;
    void errorInfo;
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
