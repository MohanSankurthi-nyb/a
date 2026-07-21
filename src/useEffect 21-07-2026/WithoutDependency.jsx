import { useState, useEffect } from "react";

function WithoutDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect runs after every render");
  });
  return (
    <div>
      <h2>Without Dependency Array</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <hr />
    </div>
  );
}

export default WithoutDependency;