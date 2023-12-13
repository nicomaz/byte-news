import { useParams } from "react-router-dom";
import SingleArticle from "../components/SingleArticle";

const Article = () => {
  const { articleId } = useParams();

  return (
    <>
      <SingleArticle articleId={articleId} />
    </>
  );
};

export default Article;
