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
      <h3 className="left">{author}</h3>
      <h3 className="right">{topic}</h3>
      <button>
        <span class="material-symbols-outlined">thumb_up</span>
        {votes}
      </button>
      <button>
        <span class="material-symbols-outlined">comment</span>
        {comment_count}
      </button>
      </div>
    </li>
  );
};

export default LargeArticleCard;
