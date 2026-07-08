import React, { useState } from "react";
import Child from "./Child";

function Parent5() {
  const [message, setMessage] = useState("No message received");

  const receiveMessage = (data) => {
    setMessage(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Parent Component</h2>
      <p><strong>Message:</strong> {message}</p>

      <Child sendMessage={receiveMessage} />
    </div>
  );
}

export default Parent5;