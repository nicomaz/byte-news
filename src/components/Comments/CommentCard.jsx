import Votes from "../Buttons/Votes";

const CommentCard = ({ comment }) => {
  const { body, author, votes } = comment;

  return (
    <div className="container comments">
      <div>
        <span className="accent">{author}</span>
        <span id="body">{body}</span>
        <span></span>
        <Votes votes={votes} />
      </div>
    </div>
  );
};

export default CommentCard;
