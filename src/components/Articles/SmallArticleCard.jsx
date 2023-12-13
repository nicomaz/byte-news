const SmallArticleCard = ({ article }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    article;

  return (
    <div className="tertiary-article-card">
      <img src={article_img_url} alt="" />
      <h3>
        <span className="accent small-text"> {author} </span>
        <span className="accent-3 small-text">
          <span className="accent-2 small-text">in </span>
          {topic}
        </span>
      </h3>
      <h2 className="article-title">{title}</h2>
      <span className="btns small-text">
        Read
        <span className="material-symbols-outlined">chevron_right</span>
      </span>
    </div>
  );
};

export default SmallArticleCard;
