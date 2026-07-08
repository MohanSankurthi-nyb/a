import React, { useState } from "react";
import Child from "./Child";

function Parent3() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child
        name="React Student"
        count={count}
      />
    </div>
  );
}

export default Parent3;