import { Link } from "react-router-dom";

const SmallArticleCard = ({ article }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    article;

  return (
    <div className="tertiary-article-card">
      <Link to={`/article/${article.article_id}`}>
        <img src={article_img_url} alt="" />
      </Link>
      <h3>
        <span className="accent small-text"> {author} </span>
        <span className="accent-3 small-text">
          <span className="accent-2 small-text">in </span>
          {topic}
        </span>
      </h3>
      <Link to={`/article/${article.article_id}`}>
        <h2 className="article-title">{title}</h2>
        <span className="btns small-text">
          Read
          <span className="material-symbols-outlined">chevron_right</span>
        </span>
      </Link>
    </div>
  );
};

export default SmallArticleCard;
