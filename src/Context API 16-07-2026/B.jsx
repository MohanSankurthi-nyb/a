import { useContext } from "react";
import { A } from "./A";

function B() {
  const { count, setCount } = useContext(A);

  return (
    <div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Context API counter</h2>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
    </div>
  );
}

export default B;