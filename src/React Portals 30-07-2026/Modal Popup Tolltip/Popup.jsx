import { createPortal } from "react-dom";

function Popup({ message }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: "green",
        color: "white",
        padding: "10px",
      }}
    >
      {message}
    </div>,
    document.getElementById("portal-root")
  );
}

export default Popup;