import VotesButton from "../Buttons/VotesButton";

const CommentCard = ({ comment }) => {
  const { body, author, votes } = comment;

  return (
    <div className="container">
      <div className="article-information">
        <span className="accent">{author}</span>
        <span>{body}</span>
        <span></span>
        <VotesButton votes={votes} />
      </div>
    </div>
  );
};

export default CommentCard;
