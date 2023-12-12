import axios from "axios";

const byteNews = axios.create({
  baseURL: "https://sunshine-news.onrender.com/api",
});

export const getAllArticles = () => {
  return byteNews.get("/articles").then((res) => {
    return res.data.articles
  });
};


