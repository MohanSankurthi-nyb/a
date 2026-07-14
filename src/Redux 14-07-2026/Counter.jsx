import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      
      <button onClick={() => dispatch(decrement())}
        style={{marginLeft:"10px"}}>
        -
      </button>
    </div>
  );
}
export default Counter;