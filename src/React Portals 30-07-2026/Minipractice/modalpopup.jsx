import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./styles.css"; 

function Modal({ onClose }) {
  const [name, setName] = useState("");

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // Prevent closing when clicking inside modal
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  // Input change handler
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Hello ${name}`);
    onClose();
  };

  return createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={handleModalClick}>
        <button onClick={onClose}>
          ❌
        </button>

        <h2>React Portal Modal</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleInputChange}
          />

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default function ModalPopup() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>React Portal Modal Example</h1>

      <button onClick={handleOpen}>
        Open Modal
      </button>

      {showModal && (
        <Modal onClose={handleClose} />
      )}
    </div>
  );
}