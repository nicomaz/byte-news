import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Votes from "../Buttons/VoteTotalContainer";
import Modal from "../Buttons/ConfirmationModal";

const CommentCard = ({ comment, setComments }) => {
  const { body, author, votes } = comment;
  const { user } = useContext(UserContext);
  const [confirmation, setConfirmation] = useState(false);

  const deleteCommentButton = () => {
    return (
      <button onClick={() => setConfirmation(true)}>delete comment</button>
    );
  };

  return (
    <div>
      <span className="accent">{author}</span>
      <span id="body">{body}</span>
      <div className="article-information">
        <Votes votes={votes} />
        <div className="form right">
          {author === user.username ? deleteCommentButton() : null}
        </div>
      </div>
      {confirmation && (
        <Modal
          message="Are you sure you want to delete this comment?"
          comment={comment}
          setComments={setComments}
          setConfirmation={setConfirmation}
          confirmation={confirmation}
        />
      )}
    </div>
  );
};
export default CommentCard;
