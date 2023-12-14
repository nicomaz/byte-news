import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { voteOnArticle } from "../../utils/api";

const VoteOnButton = ({ setVotes }) => {
  const { articleId } = useParams();
  const [voteMsg, setVoteMsg] = useState({ inc_votes: 0 });
  const [err, setErr] = useState(null);

  const updateVotes = (vote) => {
    setVotes((currVotes) => currVotes + vote);
    setVoteMsg((currVotesMsg) => ({ ...currVotesMsg, inc_votes: vote }));
    voteOnArticle(articleId, voteMsg).catch((err) => {
      setErr(err);
      if (voteMsg.inc_votes === 1) {
        setVotes((currVotes) => currVotes - 1);
      } else {
        setVotes((currVotes) => currVotes + 1);
      }
    });
  };

  return (
    <>
      <div className="article-information-2">
        <button
          className="btns one"
          onClick={() => {
            updateVotes(1);
          }}
        >
          <span className="material-symbols-outlined">thumb_up</span>
        </button>
        <button
          className="btns"
          onClick={() => {
            updateVotes(-1);
          }}
        >
          <span className="material-symbols-outlined">thumb_down</span>
        </button>
      </div>
    </>
  );
};

export default VoteOnButton;
