import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-e143.onrender.com/api",
});

export const getArticles = (page, topic) => {
  return newsApi
    .get("/articles", {
      params: {
        limit: 9,
        page: page,
        topic: topic,
      },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
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
      return Promise.reject(err);
    });
};

export const increaseArticleVotes = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};
export const decreaseArticleVotes = (article_id) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const getArticleComments = (article_id, page) => {
  return newsApi
    .get(`/articles/${article_id}/comments`, {
      params: { page: page, limit: 5 },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const postComment = (article_id, commentBody) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, commentBody)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const deleteCommentById = (comment_id) => {
  return newsApi
    .delete(`/comments/${comment_id}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const getTopics = () => {
  return newsApi
    .get("/topics")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};
