import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  age: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };

    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "SET_AGE":
      return { ...state, age: action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>User Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={state.age}
        onChange={(e) =>
          dispatch({ type: "SET_AGE", payload: e.target.value })
        }
      />

      <br /><br />

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>

      <hr />

      <h3>Entered Details</h3>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Age: {state.age}</p>
    </div>
  );
}

export default UserForm;