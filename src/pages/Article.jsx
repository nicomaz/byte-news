import { useParams } from "react-router-dom";
import MainArticle from "../components/Articles/SingleArticleContainer";

const Article = () => {
  const { articleId } = useParams();

  return (
    <>
      <MainArticle articleId={articleId} />
    </>
  );
};

export default Article;
