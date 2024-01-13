import { useEffect, useState } from "react";
import PostCommentForm from "./PostCommentForm";
import CommentCard from "./CommentCard";
import { getCommentsByArticleId } from "../../utils/api";

const CommentsContainer = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    getCommentsByArticleId(articleId).then((commentData) => {
      setComments(commentData);
    });
  }, []);

  if (!comments.length) {
    return <div className=" msg center">No comments to show</div>;
  }

  const firstThreeComments = [...comments].slice(0, 3);
  const remainingComments = [...comments].slice(3);

  return (
    <div className="comments-container">
      <h3 className="container-name">Comments</h3>
      <PostCommentForm setComments={setComments} />
      <ul>
        {firstThreeComments.map((comment) => {
          return (
            <li key={comment.comment_id} className="container comments">
              <CommentCard comment={comment} setComments={setComments} />{" "}
            </li>
          );
        })}
        <button className="btns toggle" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show more"}
          <span className="material-symbols-outlined">
            {showMore ? "expand_less" : "expand_more"}
          </span>
        </button>
        {showMore &&
          remainingComments.map((comment) => {
            return (
              <li key={comment.comment_id} className="container comments">
                <CommentCard comment={comment} setComments={setComments} />{" "}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CommentsContainer;
