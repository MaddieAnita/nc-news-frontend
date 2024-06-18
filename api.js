import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-e143.onrender.com/api",
});

export const getArticles = (page) => {
  return newsApi
    .get("/articles", {
      params: {
        limit: 9,
        page: page,
      },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
