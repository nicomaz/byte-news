import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(articleId[0]).then((commentData) => {
      setComments(commentData);
    });
  }, []);

  const showComments = [...comments].slice(0, articleId[1]);

  return (
    <ul className="container">
      {showComments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <CommentCard comment={comment} />
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
