import React, { Component } from "react";

class Child extends Component {
  componentDidMount() {
    alert("The compnent is about to unmounted");
  }
  render() {
    return (
      <div>
        <h1>Hello from Child compnent</h1>
      </div>
    );
  }
}

export default Child;
