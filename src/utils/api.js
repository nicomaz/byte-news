import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

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
    return res.data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return byteNews.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const voteOnArticle = (articleId, vote) => {
  return byteNews
    .patch(`/articles/${articleId}`, vote)
    .then((res) => {
      return res.data.article;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data.msg);
      } else if (err.request) {
        console.log(
          "Network error, please check your connection and try again"
        );
      } else {
        console.log("An error occurred:", err);
      }
    });
};
