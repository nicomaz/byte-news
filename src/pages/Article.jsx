import { useParams } from "react-router-dom";
import MainArticle from "../components/Articles/MainArticle";

const Article = () => {
  const { articleId } = useParams();

  return (
    <>
      <MainArticle articleId={articleId} />
    </>
  );
};

export default Article;
