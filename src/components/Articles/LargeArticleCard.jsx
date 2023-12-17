import { Link } from "react-router-dom";
import VoteAndCommentButtons from "../Buttons/Interactions";

const LargeArticleCard = ({ mainArticle }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    mainArticle;

  return (
    <div className="main-article-card">
      <Link to={`/article/${mainArticle.article_id}`}>
        <h2 className="article-title">{title}</h2>
        <img
          src={article_img_url}
          alt="undefined article image, alt will be updated soon"
        />
      </Link>
      <div className="article-information">
        <h3>
          <span className="accent-2"> by </span>
          <span className="accent"> {author}</span>
        </h3>
        <h3>
          <span className="accent-2"> in</span>{" "}
          <span className="accent-3"> {topic}</span>
        </h3>
      </div>
      <VoteAndCommentButtons
        props={[votes, comment_count, mainArticle.article_id]}
      />
    </div>
  );
};

export default LargeArticleCard;
