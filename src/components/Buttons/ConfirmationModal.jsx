import { useState } from "react";

const Modal = ({ message, setIsDelete }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section>
      <div className={isOpen ? "display-block" : "display-none"}>
        <div className="modal-container">
          <nav className="right">
            <button
              className="btns modal-close"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {" "}
              x{" "}
            </button>
          </nav>
          <div className="accent error-msg">
            <p>{message}</p>
            <button
              onClick={() => {
                setIsDelete(true);
              }}
            >
              Yes
            </button>{" "}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsDelete(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
