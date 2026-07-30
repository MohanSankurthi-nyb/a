import { createPortal } from "react-dom";

function Tooltip({ text }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: "100px",
        left: "100px",
        background: "black",
        color: "white",
        padding: "5px",
      }}
    >
      {text}
    </div>,
    document.getElementById("portal-root")
  );
}

export default Tooltip;