import { useContext } from "react";
import { ThemeContext } from "./ContextAPIContext";

function ContextAPIToggle() {
  const { theme, toggleTheme } =
    useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        height: "200px",
        padding: "20px",
      }}
    >
      <h1>
        Current Theme: {theme}
      </h1>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ContextAPIToggle;