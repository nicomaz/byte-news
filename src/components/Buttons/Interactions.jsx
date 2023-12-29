import CommentsButton from "./CommentTotalContainer";
import Votes from "./VoteTotalContainer";

const VoteAndCommentButtons = ({ props }) => {
  const votes = props[0];
  const comments = props[1];
  const articleId = props[2];

  return (
    <div className="article-information">
      <Votes votes={votes} />
      <CommentsButton comments={comments} />
    </div>
  );
};

export default VoteAndCommentButtons;
