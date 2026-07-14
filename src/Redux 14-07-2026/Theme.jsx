import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./store1";

function Theme() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.color,
        padding: "30px",
        marginTop: "20px",
      }}
    >
      <h1>{theme.mode} Theme</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
}
export default Theme;