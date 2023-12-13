import { Link } from "react-router-dom";

const LargeArticleCard = ({ mainArticle }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    mainArticle;

  return (
    <li className="main-article-card">
      <div className="container">
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
        <div className="article-information">
          <span className="interactions btns">{votes} votes</span>
          <span className="interactions btns">{comment_count} comments</span>
          <span className="btns">
            Read more
            <span className="material-symbols-outlined">chevron_right</span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default LargeArticleCard;
