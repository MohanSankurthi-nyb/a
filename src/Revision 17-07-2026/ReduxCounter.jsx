import { useDispatch, useSelector } from "react-redux";
function ReduxCounter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Counter</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}

export default ReduxCounter;