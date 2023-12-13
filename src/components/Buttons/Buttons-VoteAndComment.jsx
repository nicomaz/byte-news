import CommentsButton from "./CommentsButton";
import ExtraButton from "./ExtraButton";
import VotesButton from "./VotesButton";

const VoteAndCommentButtons = ({ props }) => {
  const votes = props[0];
  const comments = props[1];
  return (
    <div className="article-information">
      <VotesButton votes={votes} />
      <CommentsButton comments={comments} />
      <ExtraButton extra="Read" />
    </div>
  );
};

export default VoteAndCommentButtons;
