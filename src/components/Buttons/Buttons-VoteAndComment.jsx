import { Link } from "react-router-dom";
import CommentsButton from "./CommentsButton";
import ExtraButton from "./ExtraButton";
import VotesButton from "./VotesButton";

const VoteAndCommentButtons = ({ props }) => {
  const votes = props[0];
  const comments = props[1];
  const articleId = props[2];

  return (
    <div className="article-information">
      <VotesButton votes={votes} />
      <CommentsButton comments={comments} />
      <Link to={`/article/${articleId}`}>
        <ExtraButton extra="Read" />
      </Link>
    </div>
  );
};

export default VoteAndCommentButtons;
