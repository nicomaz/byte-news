import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../contexts/Loading";
import { getIndividualArticle } from "../../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import CommentsContainer from "../Comments/CommentsContainer";
import PageNotFound from "../../pages/PageNotFound";
import ErrorModal from "../Buttons/ErrorModal";

const SingleArticleComponent = ({ articleId }) => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getIndividualArticle(articleId)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          console.log(err.response.data);
          setError({
            title: err.response.data.msg,
            message: "Would you like to go Home?",
          });
        } else {
          setError({
            title: err.message,
            message: "Please refresh the page or try again at another time",
          });
        }
      });
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      {error ? (
        <PageNotFound error={error} />
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
