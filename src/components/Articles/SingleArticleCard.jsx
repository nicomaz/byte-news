import { useState } from "react";
import { setDate } from "../../utils/getDate";
import VoteOnButton from "../Buttons/VoteButton";
import { Link } from "react-router-dom";
import Votes from "../Buttons/Votes";

const SingleArticleCard = ({ article }) => {
  const { author, title, created_at, body, topic, votes, article_img_url } =
    article;

  const [renderedVotes, setRenderedVotes] = useState(votes);
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
        <h2> {title}</h2>
        <img src={article_img_url} alt="article image, to be updated" />
        <div className="article-information">
          <h3>
            <span className="accent-2">by</span>
            <span className="accent"> {author} </span>
          </h3>
          <h3>
            <span className="accent-2">in</span>
            <span className="accent"> {topic}</span>
          </h3>
        </div>
      </div>
      <div className="singleCard-bottom">
        <p>{body}</p>
        <div className="article-information">
          <Votes votes={renderedVotes} />
          <VoteOnButton
            setRenderedVotes={setRenderedVotes}
            renderedVotes={renderedVotes}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleArticleCard;
