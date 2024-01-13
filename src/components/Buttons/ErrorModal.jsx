import { useState } from "react";

const ErrorModal = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { setError } = props;

  console.log(props);

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

export default ErrorModal;
