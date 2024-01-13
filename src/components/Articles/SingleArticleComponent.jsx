import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../contexts/Loading";
import { getIndividualArticle } from "../../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import CommentsContainer from "../Comments/CommentsContainer";
import PageNotFound from "../../pages/PageNotFound";

const SingleArticleComponent = ({ articleId }) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);
  const [typeOfError, setTypeOfError] = useState();

  useEffect(() => {
    setIsLoading(true);
    getIndividualArticle(articleId)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.data.msg) {
          setError(true);
          setTypeOfError(404);
        }
      });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      {error & (typeOfError === 404) ? (
        <PageNotFound />
      ) : (
        <div className="article">
          <SingleArticleCard article={article} />
          <div className="comments-container">
            <CommentsContainer articleId={articleId} />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleArticleComponent;
