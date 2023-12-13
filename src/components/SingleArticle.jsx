import { getIndividualArticle } from "../utils/api";

const SingleArticle = ({ articleId }) => {
  const article = getIndividualArticle(articleId);
};

export default SingleArticle;
