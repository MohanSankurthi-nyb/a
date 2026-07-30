import React, { Component } from "react";

class Comparison extends Component {
  // Function Reference
  handleClick = () => {
    alert("Button clicked using Function Reference");
  };

  render() {
    return (
      <div>
        <h2>Comparison: Inline Event vs Function Reference</h2>

        {/* Function Reference */}
        <button onClick={this.handleClick}>
          Function Reference
        </button>

        <br /><br />

        {/* Inline Event Handling */}
        <button
          onClick={() => alert("Button clicked using Inline Event")}
        >
          Inline Event
        </button>
      </div>
    );
  }
}

export default Comparison;