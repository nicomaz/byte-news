import { setDate } from "../../utils/getDate";
import VoteAndCommentButtons from "../Buttons-VoteAndComment";
import PostCommentForm from "../Comments/PostCommentForm";

const SingleArticleCard = ({ article }) => {
  const {
    author,
    title,
    created_at,
    body,
    topic,
    votes,
    comment_count,
    article_img_url,
  } = article;

  let date = "";

  if (created_at) {
    date += setDate(created_at);
  }

  return (
    <div className="container">
      <ul>
        <li>{title}</li>
        <li>
          <img src={article_img_url} alt="article image, to be updated" />
        </li>
        <li>{topic}</li>
        <li>{author}</li>
        <li>{date}</li>
        <li>{body}</li>
        <div className="article-information">
          <span className="interactions btns">{votes} votes</span>
          <span className="interactions btns">{comment_count} comments</span>
        </div>
      </ul>
    </div>
  );
};

export default SingleArticleCard;
