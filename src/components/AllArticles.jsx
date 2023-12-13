import { useContext, useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import { ArticlesContext } from "../contexts/Articles";
import LargeArticleCard from "./LargeArticleCard";
import MediumArticleCard from "./MediumArticleCard";
import SmallArticleCard from "./SmallArticleCard";

const Articles = (sortedArticles) => {
  const { articles, setArticles } = useContext(ArticlesContext);
  const { mainArticle, secondaryArticles, tertiaryArticles } = sortedArticles;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="loading">LOADING...</div>;
  }

  return (
    <ul>
      <LargeArticleCard mainArticle={mainArticle} />
      {secondaryArticles.map((article) => {
        return (
          <li key={article.article_id}>
            <MediumArticleCard article={article} />
          </li>
        );
      })}
      <div className="tertiary-container">
        {tertiaryArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <SmallArticleCard article={article} />
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default Articles;
