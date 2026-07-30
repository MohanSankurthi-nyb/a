import { createPortal } from "react-dom";

function Modal({ children, close }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
        }}
      >
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Modal;