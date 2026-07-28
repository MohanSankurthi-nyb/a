import React, { useState } from "react";

// Custom Hook
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Component using Custom Hook
function CustomHooks() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Custom Hook Example</h2>
      <h3>Count: {count}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CustomHooks;
