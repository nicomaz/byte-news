import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../utils/api";

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(articleId).then((commentData) => {
      setComments(commentData);
    });
  }, []);


  return ( <div className="container">
    {comments.map((comment) => {
        
    })}
  </div>)
};

export default Comments;
