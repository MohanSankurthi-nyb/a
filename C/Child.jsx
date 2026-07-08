import React from "react";

function Child({ name, count }) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {name}</p>
      <p>Count: {count}</p>
    </div>
  );
}

export default Child;