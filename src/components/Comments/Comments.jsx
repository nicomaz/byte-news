import { useEffect } from "react";
import { getCommentsByArticleId } from "../../utils/api";

const Comments = ({ articleId }) => {
  const setComments = articleId[1];

  useEffect(() => {
    getCommentsByArticleId(articleId[0]).then((commentData) => {
      setComments(commentData);
    });
  }, []);
};

export default Comments;
