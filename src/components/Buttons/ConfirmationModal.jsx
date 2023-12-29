import { deleteComment, getCommentsByArticleId } from "../../utils/api";

const Modal = ({
  message,
  comment,
  setComments,
  setConfirmation,
  confirmation,
}) => {
  const { comment_id, article_id } = comment;

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
                deleteComment(comment_id)
                  .then(() => {
                    return getCommentsByArticleId(article_id);
                  })
                  .then((commentData) => {
                    setComments(commentData);
                    setConfirmation(false);
                  });
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
      </div>
    </section>
  );
};

export default Modal;
