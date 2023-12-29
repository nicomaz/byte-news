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
    return res.data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return byteNews.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const voteOnArticle = (articleId, vote) => {
  return byteNews.patch(`/articles/${articleId}`, vote).then((res) => {
    return res.data.article;
  });
};

export const commentOnArticle = (articleId, body) => {
  const postComment = { postComment: body };
  return byteNews
    .post(`/articles/${articleId}/comments`, postComment)
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (commentId) => {
  return byteNews.delete(`/comments/${commentId}`);
};

export const getUser = (username) => {
  return byteNews.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};
