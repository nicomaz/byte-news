const MediumArticleCard = ({ article }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    article;

  return (
    <div className="secondary-article-card">
      <h3>
        <span className="accent"> {author} </span>
        <span className="accent-2">in</span>
        <span className="accent-3"> {topic}</span>
      </h3>
      <div className="article-information">
        <img src={article_img_url} alt="" />
        <h2 className="article-title">{title}</h2>
      </div>
      <div className="article-information">
        <span className="interactions btns">{votes} votes</span>
        <span className="interactions btns">{comment_count} comments</span>
        <span className="btns">
          Read
          <span class="material-symbols-outlined">chevron_right</span>
        </span>
      </div>
    </div>
  );
};

export default MediumArticleCard;
