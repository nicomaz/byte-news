import { useEffect, useState, useContext } from "react";
import { getIndividualArticle } from "../../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import { LoadingContext } from "../../contexts/Loading";
import PostCommentForm from "../Comments/PostCommentForm";
import Comments from "../Comments/Comments";
import ExtraButton from "../Buttons/ExtraButton";
import { Link } from "react-router-dom";

const SingleArticle = ({ articleId }) => {
  const [article, setArticle] = useState({});
  const { isLoading, setIsLoading } = useContext(LoadingContext);

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

  return (
    <div className="article">
      <SingleArticleCard article={article} />
      <div className="comments-container">
        <h3 className="container-name">Comments</h3>
        <PostCommentForm />
        <Comments articleId={[articleId, 3]} />
        <Link to={`/${articleId}/comments`}>
          <ExtraButton extra="More comments"/>
        </Link>
      </div>
    </div>
  );
};

export default SingleArticle;
