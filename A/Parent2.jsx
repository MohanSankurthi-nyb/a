import React, { useState } from "react";
import Child2 from "./Child2";

function Parent2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent 2</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <Child2 count={count} />
    </div>
  );
}

export default Parent2;