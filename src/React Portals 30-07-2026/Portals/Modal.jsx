import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
    <div
      style={{
        background: "lightblue",
        padding: "20px",
        border: "2px solid black",
      }}
    >
      <h2>This is a Modal using React Portal</h2>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Modal;