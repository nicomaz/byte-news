import { useState } from "react";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { setError } = props;
  return (
    <section>
      <div className={isOpen ? "display-block" : "display-none"}>
        <div className="modal-container">
          <nav className="right">
            <button
              className="btns modal-close"
              onClick={() => {
                setIsOpen(false);
                setError(null);
              }}
            >
              {" "}
              x{" "}
            </button>
          </nav>
          <div className="accent error-msg">
            <p>{props.error.title}</p>
            <p>{props.error.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
