import React, { useState } from "react";

function Child1({ sendName }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    sendName(input);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Child1;