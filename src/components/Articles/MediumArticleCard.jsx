import VoteAndCommentButtons from "../Buttons-VoteAndComment";

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
      <VoteAndCommentButtons props={[votes, comment_count]} />
    </div>
  );
};

export default MediumArticleCard;
