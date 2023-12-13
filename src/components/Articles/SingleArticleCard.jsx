import { setDate } from "../../utils/getDate";
import VotesButton from "../Buttons/VotesButton";
import CommentsButton from "../Buttons/CommentsButton";

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

  let date = "";

  if (created_at) {
    date += setDate(created_at);
  }

  return (
    <div className="singleCard">
      <div className="singleCard-top">
        <div className="article-information">
          <span id="date">{date}</span>
          <VotesButton votes={votes} />
        </div>
        <h2> {title}</h2>
        <img
                  className="center"
          src={article_img_url}
          alt="article image, to be updated"
        />
        <div className="article-information">
          <h3>
            <span className="accent-2">by</span>
            <span className="accent"> {author} </span>
          </h3>
          <h3>
            <span className="accent-2">in</span>
            <span className="accent-3"> {topic}</span>
          </h3>
        </div>
      </div>
      <div className="singleCard-bottom">
        <p>{body}</p>
        <div className="article-information"></div>
      </div>
    </div>
  );
};

export default SingleArticleCard;
