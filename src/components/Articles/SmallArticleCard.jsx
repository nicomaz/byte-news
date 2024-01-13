import { Link } from "react-router-dom";

const SmallArticleCard = ({ article }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    article;

  return (
    <>
      <Link to={`/article/${article.article_id}`}>
        <img src={article_img_url} alt="" />
      </Link>
      <h3>
        <span className="accent"> {author} </span>
        <span className="accent">{topic}</span>
      </h3>
      <Link to={`/article/${article.article_id}`}>
        <h2 className="article-title">{title}</h2>
      </Link>
    </>
  );
};

export default SmallArticleCard;
