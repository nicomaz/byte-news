import { Link } from "react-router-dom";
import VoteAndCommentButtons from "../Buttons/Interactions";

const MediumArticleCard = ({ article }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    article;

  return (
    <>
      <h3 className="article-information">
        <span className="accent"> {author} </span>
        <span className="accent">
          <span className="accent-2">in </span>
          {topic}
        </span>
      </h3>
      <Link to={`/article/${article.article_id}`}>
        <div className="article-information">
          <img src={article_img_url} alt="" />
          <h2 className="article-title">{title}</h2>
        </div>
      </Link>
      <VoteAndCommentButtons
        props={[votes, comment_count, article.article_id]}
      />
    </>
  );
};

export default MediumArticleCard;
