import React from "react";

function Child1(props) {
  return (
    <div>
      <h3>Child 1</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default Child1;