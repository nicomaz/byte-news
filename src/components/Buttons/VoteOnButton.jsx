import { useState } from "react";
import { useParams } from "react-router-dom";
import { voteOnArticle } from "../../utils/api";
import Modal from "./Modal";

const VoteOnButton = ({ setRenderedVotes }) => {
  const [error, setError] = useState(null);
  const { articleId } = useParams();

  const updateVotes = (requestedVote) => {
    setRenderedVotes((currRenderedVotes) => currRenderedVotes + requestedVote);
    voteOnArticle(articleId, { inc_votes: requestedVote }).catch((err) => {
      setError({ message: err.message });
      setRenderedVotes(
        (currRenderedVotes) => currRenderedVotes - requestedVote
      );
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
        {error && <Modal message={error.message} setError={setError}/>}
      </div>
    </>
  );
};

export default VoteOnButton;
