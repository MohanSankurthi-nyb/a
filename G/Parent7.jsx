import React, { useState } from "react";


function ChildOne({ updateMessage }) {
  const sendData = () => {
    updateMessage("Hello from Child One!");
  };

  return (
    <div>
      <h3>Child One</h3>
      <button onClick={sendData}>
        Send Message to Child Two
      </button>
    </div>
  );
}


function ChildTwo({ message }) {
  return (
    <div>
      <h3>Child Two</h3>
      <p>Received: {message}</p>
    </div>
  );
}


function Parent7() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Parent Component</h2>

      <ChildOne updateMessage={setMessage} />

      <ChildTwo message={message} />
    </div>
  );
}

export default Parent7;