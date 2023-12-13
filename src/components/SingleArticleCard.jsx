import { setDate } from "../utils/getDate";

const SingleArticleCard = ({ article }) => {
  const {
    author,
    title,
    created_at,
    body,
    topic,
    votes,
    comment_count,
    article_img_url,
  } = article;

console.log(created_at)

  return (
    <div className="container">
      <ul>
        <li>{title}</li>
        <li>
          <img src={article_img_url} alt="article image, to be updated" />
        </li>
        <li>{author}</li>
        <li>{topic}</li>
        <li>{author}</li>
        <li>{}</li>
      </ul>
    </div>
  );
};

export default SingleArticleCard;
