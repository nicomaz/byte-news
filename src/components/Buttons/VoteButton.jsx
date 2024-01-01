import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { voteOnArticle } from "../../utils/api";
import { UserContext } from "../../contexts/UserContext";
import ErrorModal from "./ErrorModal";

const VoteOnButton = ({ setRenderedVotes }) => {
  const [error, setError] = useState(null);
  const { articleId } = useParams();
  const { user } = useContext(UserContext);

  const updateVotes = (requestedVote) => {
    setRenderedVotes((currRenderedVotes) => currRenderedVotes + requestedVote);
    voteOnArticle(articleId, { inc_votes: requestedVote }).catch((err) => {
      setError({
        title: err.message,
        message: "Please refresh the page or try again at another time",
      });
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
            user.username === "guest"
              ? setError({
                  title: "",
                  message: "Please log in or sign up to vote",
                })
              : updateVotes(1);
          }}
        >
          <span className="material-symbols-outlined">thumb_up</span>
        </button>
        <button
          className="btns"
          onClick={() => {
            user.username == "guest"
              ? setError({
                  title: "",
                  message: "Please log in or sign up to vote",
                })
              : updateVotes(-1);
          }}
        >
          <span className="material-symbols-outlined">thumb_down</span>
        </button>
        {error && <ErrorModal error={error} setError={setError} />}
      </div>
    </>
  );
};

export default VoteOnButton;
