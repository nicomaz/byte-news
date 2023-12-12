const MediumArticleCard = ({ article }) => {
  const { author, title, topic, votes, comment_count, article_img_url } =
    article;

  return (
    <div className="secondary-article-card">
      <h3>
        {author} in <span className="accent">Topic</span>
      </h3>
      <h2>{title}</h2>
      <img src={article_img_url} alt="" />
      <span className="interactions btns">{votes} votes</span>
        <span className="interactions btns" >{comment_count} comments</span>
    </div>
  );
};

export default MediumArticleCard;
