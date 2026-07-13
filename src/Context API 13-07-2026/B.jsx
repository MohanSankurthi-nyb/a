import { useContext } from "react";
import { A } from "./a";

function B() {
  const { count, setCount } = useContext(A);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default B;