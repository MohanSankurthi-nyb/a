import React from "react";
import Child1 from "./Child1";

function Parent1() {
  const message = "Hello from Parent 1";

  return (
    <div>
      <h2>Parent 1</h2>
      <Child1 message={message} />
    </div>
  );
}

export default Parent1;