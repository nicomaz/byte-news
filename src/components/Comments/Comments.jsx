import { useEffect } from "react";
import { getCommentsByArticleId } from "../../utils/api";

const Comments = (props) => {
  const { articleId, setComments, comments } = props;

  useEffect(() => {
    getCommentsByArticleId(articleId).then((commentData) => {
      setComments(commentData);
    });
  }, [comments]);

  if (!comments.length) {
    return <div className=" msg center">No comments to show</div>;
  }
};

export default Comments;
