import React from "react";

function Child({ sendMessage }) {
  return (
    <div>
      <h3>Child Component</h3>

      <button
        onClick={() => sendMessage("Hello Parent!")}>
        Send Message
      </button>
    </div>
  );
}

export default Child;