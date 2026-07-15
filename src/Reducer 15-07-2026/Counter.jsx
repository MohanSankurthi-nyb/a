import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };//Take the current count, add 1, and save it as the new count."

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Counter: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrease
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default Counter;