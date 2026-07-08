import React, { useState } from "react";
import Child1 from "./Child1";

function Parent6() {
  const [name, setName] = useState("");

  const receiveName = (value) => {
    setName(value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Parent Component</h2>

      <h3>Entered Name: {name}</h3>

      <Child1 sendName={receiveName} />
    </div>
  );
}

export default Parent6;