import { useContext } from "react";
import { ArticlesContext } from "../contexts/Articles";
import Articles from "../components/AllArticles";
import Header from "../components/Header";
import TopNavBar from "../components/TopNavBar";

const Home = () => {
  const { articles } = useContext(ArticlesContext);

  const mainArticle = articles[0];
  const secondaryArticles = articles.slice(1, 6);
  const tertiaryArticles = articles.slice(6, 12);

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <nav className="container">
        <TopNavBar />
      </nav>
      <main className="container">
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
