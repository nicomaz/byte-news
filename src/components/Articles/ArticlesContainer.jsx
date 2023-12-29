import { useContext, useEffect } from "react";
import { getAllArticles } from "../../utils/api";
import { ArticlesContext } from "../../contexts/Articles";
import LargeArticleCard from "./LargeArticleCard";
import MediumArticleCard from "./MediumArticleCard";
import SmallArticleCard from "./SmallArticleCard";
import { LoadingContext } from "../../contexts/Loading";

const Articles = (sortedArticles) => {
  const { setArticles } = useContext(ArticlesContext);
  const { mainArticle, secondaryArticles, tertiaryArticles } = sortedArticles;
  const { isLoading, setIsLoading } = useContext(LoadingContext);

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
    <div>
      <LargeArticleCard mainArticle={mainArticle} />
      <ul className="articles">
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
              <li className="tertiary-article-card" key={article.article_id}>
                <SmallArticleCard article={article} />
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Articles;
