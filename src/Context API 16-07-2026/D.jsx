import { Provider, useSelector, useDispatch } from "react-redux";
import { store, increment } from "./C";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
    <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h2>Redux Counter</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      </div>
    </>
  );
}

function D() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default D;