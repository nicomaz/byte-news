import { useState } from "react";
import { setDate } from "../../utils/getDate";
import VoteOnButton from "../Buttons/VoteOnButton";
import { Link } from "react-router-dom";
import Votes from "../Buttons/Votes";

const SingleArticleCard = ({ article }) => {
  const { author, title, created_at, body, topic, votes, article_img_url } =
    article;

  const [renderedVotes, setRenderedVotes] = useState(votes);

  console.log(renderedVotes)
  let date = "";

  if (created_at) {
    date += setDate(created_at);
  }

  return (
    <div className="singleCard">
      <div className="singleCard-top">
        <div className="article-information">
          <span id="date">{date}</span>
        </div>
        <Link to={`/article/${article.article_id}`}>
          <h2> {title}</h2>
          <img
            className="center"
            src={article_img_url}
            alt="article image, to be updated"
          />
        </Link>
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
        <div className="article-information">
          <Votes votes={renderedVotes} />
          <VoteOnButton setRenderedVotes={setRenderedVotes} renderedVotes={renderedVotes}/>
        </div>
      </div>
    </div>
  );
};

export default SingleArticleCard;
