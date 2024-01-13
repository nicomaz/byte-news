import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByTopic } from "../utils/api";
import MediumArticleCard from "../components/Articles/MediumArticleCard";

export default function ArticlesByTopic() {
  const { topicId } = useParams();
  const [articles, setArticles] = useState();

  useEffect(() => {
    getArticleByTopic(topicId).then((articlesData) => {
      setArticles(articlesData);
    });
  }, []);

  return (
    <>
      <div className="topic-title"> {topicId}</div>
      {articles ? (
        <ul className="articles">
          <div className="secondary-container">
            {articles.map((article) => {
              return (
                <li className="secondary-article-card" key={article.article_id}>
                  <MediumArticleCard article={article} />
                </li>
              );
            })}
          </div>
        </ul>
      ) : null}
    </>
  );
}
