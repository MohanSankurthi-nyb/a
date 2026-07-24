import { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div>
      <h2>2. useEffect Hook</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <hr />
    </div>
  );
}

export default UseEffectExample;