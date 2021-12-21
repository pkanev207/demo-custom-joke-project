import React from "react";

class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error from componentDidCatch: ", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h3 style={{ margin: "3rem", minHeight: "55vh", textAlign: "center" }}>
          Something went terribly wrong... 😢
        </h3>
      );
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;
