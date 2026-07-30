import React, { Component } from "react";

class ClassComp extends Component {
  // Simple click event
  handleClick = () => {
    alert("Button Clicked!");
  };

  // Event handler with parameter
  handleGreet = (name) => {
    alert(`Hello, ${name}!`);
  };

  render() {
    return (
      <div>
        <h2>Class Component Event Handling</h2>

        {/* Click Event */}
        <button onClick={this.handleClick}>
          Click Me
        </button>

        <br /><br />

        {/* Passing Parameters */}
        <button onClick={() => this.handleGreet("Mohan")}>
          Greet Mohan
        </button>

        <br /><br />

        <button onClick={() => this.handleGreet("Patel")}>
          Greet Patel
        </button>
      </div>
    );
  }
}

export default ClassComp;