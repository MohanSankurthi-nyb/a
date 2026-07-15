import { useReducer } from "react";

const initialState = {
  items: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload]
      };

    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (item) => item.id !== action.payload
        )
      };

    default:
      return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: 1,
              name: "Laptop"
            }
          })
        }
      >
        Add Laptop
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: 1
          })
        }
      >
        Remove Laptop
      </button>

      <h3>Cart Items</h3>

      {state.items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Cart;