import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  public state = { hasError: false, redirect: "" };

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    // eslint-disable-next-line
    console.error("ErrorBoundary caught an error", error);
  }

  public componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }
  public render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There Was en Error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
