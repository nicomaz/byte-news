import { useEffect, useState } from "react";
import { getIndividualArticle } from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = ({ articleId }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    getIndividualArticle(articleId).then((articleData) => {
      setArticle(articleData);
    });
  }, []);

  return (
    <>
      <SingleArticleCard article={article} />
    </>
  );
};

export default SingleArticle;
