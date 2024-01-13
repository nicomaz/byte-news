import { useContext, useEffect, useState } from "react";
import { ArticlesContext } from "../contexts/Articles";
import Articles from "../components/Articles/ArticlesContainer";
import TopNavBar from "../components/TopNavBar";
import SortBy from "../components/SortBy";
import { LoadingContext } from "../contexts/Loading";

const Home = () => {
  const [isSortByPressed, setIsSortedByPressed] = useState(false);
  const { articles } = useContext(ArticlesContext);

  const mainArticle = articles[0];
  const secondaryArticles = articles.slice(1, 6);
  const tertiaryArticles = articles.slice(6, 12);

  console.log(isSortByPressed);
  return (
    <>
      <nav>
        <TopNavBar
          setIsSortedByPressed={setIsSortedByPressed}
          isSortByPressed={isSortByPressed}
        />
      </nav>
      {isSortByPressed ? <SortBy /> : null}
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
