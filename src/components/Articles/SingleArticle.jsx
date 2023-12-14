import { useEffect, useState, useContext } from "react";
import { getIndividualArticle } from "../../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import { LoadingContext } from "../../contexts/Loading";
import PostCommentForm from "../Comments/PostCommentForm";
import Comments from "../Comments/Comments";
import CommentCard from "../Comments/CommentCard";

const SingleArticle = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [showMore, setShowMore] = useState(false);
  const [showMoreMessage, setShowMoreMessage] = useState("Read more");
  const [showLessMessage, setShowLessMessage] = useState("expand_more");

  const showResults = () => {
    setShowMore(!showMore);
    if (showMore) {
      setShowMoreMessage("Read more");
      setShowLessMessage("expand_more");
    } else {
      setShowMoreMessage("Read less");
      setShowLessMessage("expand_less");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getIndividualArticle(articleId).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, []);


  if (isLoading) {
    return <div className="loading">LOADING...</div>;
  }


  const showComments = [...comments].slice(0, 3);
  const moreComments = [...comments].slice(3);

  const mapComments = (comments) => {
    return comments.map((comment) => {
      return (
        <li key={comment.comment_id}>
          <CommentCard comment={comment} />
        </li>
      );
    });
  };

  return (
    <div className="article">
      <SingleArticleCard article={article} />
      <div className="comments-container">
        <h3 className="container-name">Comments</h3>
        <PostCommentForm />
        <button className="btns toggle" onClick={() => showResults()}>
          {comments.length ? showMoreMessage: null}
          <span className="material-symbols-outlined">{comments.length ? showLessMessage: null}</span>
        </button>
        <Comments articleId={[articleId, setComments, comments]} />
        <ul className="container">{mapComments(showComments)}</ul>
        <ul className="container">
          {showMore ? mapComments(moreComments) : null}
        </ul>
      </div>
    </div>
  );
};

export default SingleArticle;
