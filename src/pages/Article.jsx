import { useParams } from "react-router-dom";
import SingleArticle from "../components/Articles/SingleArticle";

const Article = () => {
  const { articleId } = useParams();

  return (
    <>
      <SingleArticle articleId={articleId} />
    </>
  );
};

export default Article;
