const LargeArticleCard = ({ mainArticle }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    mainArticle;

  return (
    <li className="main-article-card">
      <div className="container">
        <h2>{title}</h2>
        <img
          src={article_img_url}
          alt="undefined article image, alt will be updated soon"
        />
        <div className="article-information">
          <h3>
            by <span className="accent"> {author}</span>
          </h3>
          <h3>
            in <span className="accent"> {topic}</span>
          </h3>
        </div>
        <div className="article-information">
          <span className="interactions btns">{votes} votes</span>
          <span className="interactions btns">{comment_count} comments</span>
        </div>
      </div>
    </li>
  );
};

export default LargeArticleCard;
