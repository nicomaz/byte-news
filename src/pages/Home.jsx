import { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../contexts/Articles";
import Articles from "../components/Articles/ArticlesContainer";
import TopNavBar from "../components/TopNavBar";
import SortBy from "../components/SortBy";
import { getSortedArticles } from "../utils/api";

const Home = () => {
  const [isSortByPressed, setIsSortedByPressed] = useState(false);
  const [sortBy, setSortBy] = useState();
  const { articles, setArticles } = useContext(ArticlesContext);

  const mainArticle = articles[0];
  const secondaryArticles = articles.slice(1, 6);
  const tertiaryArticles = articles.slice(6, 12);

  useEffect(() => {
    if (sortBy) {
      getSortedArticles(sortBy[0], sortBy[1]).then((sortedArticles) => {
        setArticles(sortedArticles);
      });
    }
  }, [sortBy]);

  return (
    <>
      <nav>
        <TopNavBar
          setIsSortedByPressed={setIsSortedByPressed}
          isSortByPressed={isSortByPressed}
          setSortBy={setSortBy}
        />
      </nav>
      {isSortByPressed ? <SortBy setSortBy={setSortBy} /> : null}
      <main>
        <Articles
          mainArticle={mainArticle}
          secondaryArticles={secondaryArticles}
          tertiaryArticles={tertiaryArticles}
        />
      </main>
    </>
  );
};

export default Home;
