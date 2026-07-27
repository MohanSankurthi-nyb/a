import React, { useState } from "react";

// Normal Component
function NormalComponent({ name }) {
  console.log("NormalComponent rendered");

  return (
    <div>
      <h3>Normal Component</h3>
      <p>Hello {name}</p>
    </div>
  );
}

// Memoized Component
const MemoComponent = React.memo(function MemoComponent({ name }) {
  console.log("MemoComponent rendered");

  return (
    <div>
      <h3>Memoized Component</h3>
      <p>Hello {name}</p>
    </div>
  );
});

function Component() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React.memo() Comparison</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      <NormalComponent name="John" />

      <MemoComponent name="John" />
    </div>
  );
}

export default Component;