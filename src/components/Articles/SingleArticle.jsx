import { useEffect, useState, useContext } from "react";
import { getIndividualArticle } from "../../utils/api";
import SingleArticleCard from "./SingleArticleCard";
import { LoadingContext } from "../../contexts/Loading";
import PostCommentForm from "../Comments/PostCommentForm";
import Comments from "../Comments/Comments";

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
    <>
      <SingleArticleCard article={article} />
      <h3>Comments</h3>
      <PostCommentForm />
      <Comments articleId={articleId}/>
    </>
  );
};

export default SingleArticle;
