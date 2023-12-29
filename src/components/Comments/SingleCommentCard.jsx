import { useContext, useState } from "react";
import Votes from "../Buttons/VoteTotalContainer";
import { UserContext } from "../../contexts/UserContext";
import Modal from "../Buttons/ConfirmationModal";

const CommentCard = ({ comment }) => {
  const { body, author, votes } = comment;
  const { user } = useContext(UserContext);
  const [confirmation, setConfirmation] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const deleteCommentButton = () => {
    return (
      <button onClick={() => setConfirmation(true)}>delete comment</button>
    );
  };

  return (
    <div className="container comments">
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
          setIsDelete={setIsDelete}
        />
      )}
    </div>
  );
};

export default CommentCard;
