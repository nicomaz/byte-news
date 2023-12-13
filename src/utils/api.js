import axios from "axios";

const byteNews = axios.create({
  baseURL: "https://sunshine-news.onrender.com/api",
});

export const getAllArticles = () => {
  return byteNews.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getIndividualArticle = (articleId) => {
  return byteNews.get(`/articles/${articleId}`).then((res) => {
    return res.data.articles;
  });
};
