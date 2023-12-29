import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../contexts/Loading";
import { getIndividualArticle } from "../../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import CommentsContainer from "../Comments/CommentsContainer";

const SingleArticleComponent = ({ articleId }) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getIndividualArticle(articleId).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="article">
      <SingleArticleCard article={article} />
      <div className="comments-container">
        <CommentsContainer articleId={articleId} />
      </div>
    </div>
  );
};

export default SingleArticleComponent;
