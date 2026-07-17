import { createStore } from "redux";
// Initial State
const initialState = {
  count: 0,
};
// Reducer Function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
}
// Create Redux Store
const store = createStore(counterReducer);
export default store;