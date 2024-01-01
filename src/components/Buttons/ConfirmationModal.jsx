import { useState } from "react";
import { deleteComment, getCommentsByArticleId } from "../../utils/api";
import ErrorModal from "./ErrorModal";

const Modal = ({
  message,
  comment,
  setComments,
  setConfirmation,
  confirmation,
}) => {
  const { comment_id, article_id } = comment;
  const [error, setError] = useState(null);

  function deleteCommentReq() {
    deleteComment(comment_id)
      .then(() => {
        return getCommentsByArticleId(article_id);
      })
      .then((commentData) => {
        setComments(commentData);
        setConfirmation(false);
      })
      .catch((err) => {
        setError({
          title: err.message,
          message: "Please refresh the page or try again at another time",
        });
      });
  }

  return (
    <section>
      <div className={confirmation ? "display-block" : "display-none"}>
        <div className="modal-container">
          <nav className="right">
            <button
              className="btns modal-close"
              onClick={() => {
                setConfirmation(false);
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
                deleteCommentReq();
              }}
            >
              Yes
            </button>{" "}
            <button
              onClick={() => {
                setConfirmation(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>{" "}
      {error && <ErrorModal error={error} setError={setError} />}
    </section>
  );
};

export default Modal;
