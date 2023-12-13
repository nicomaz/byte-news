const VoteAndCommentButtons = ({ props }) => {
  const votes = props[0];
  const comments = props[1];
  return (
    <div className="article-information">
      <span className="interactions btns">{votes} votes</span>
      <span className="interactions btns">{comments} comments</span>
      <span className={"btns"}>
        Read
        <span className="material-symbols-outlined">chevron_right</span>
      </span>
    </div>
  );
};

export default VoteAndCommentButtons;
