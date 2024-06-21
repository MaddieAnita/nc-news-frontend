import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleArticle from "./components/SingleArticle";
import ErrorPage from "./components/ErrorPage";
import SingleTopic from "./components/SingleTopic";
import { getTopics } from "../api";
import Users from "./components/Users";
import SwitchUsers from "./components/SwitchUsers";
import SingleUser from "./components/SingleUser";
import LoggedInUser from "./components/LoggedInUser";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [categoriesList, setCategoriesList] = useState([]);
  const [articlesDisplaying, setArticlesDisplaying] = useState({
    start: 1,
    end: 9,
  });

  useEffect(() => {
    getTopics().then(({ topics }) => {
      setCategoriesList(topics);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header categoriesList={categoriesList} setPage={setPage} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              setArticles={setArticles}
              articlesDisplaying={articlesDisplaying}
              setArticlesDisplaying={setArticlesDisplaying}
              categoriesList={categoriesList}
              setCategoriesList={setCategoriesList}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route
          path="/articles"
          element={
            <SingleTopic
              articles={articles}
              setArticles={setArticles}
              articlesDisplaying={articlesDisplaying}
              setArticlesDisplaying={setArticlesDisplaying}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<SingleUser />} />
        <Route path="/profile/:username" element={<LoggedInUser />} />
        <Route path="/profile/switch-users" element={<SwitchUsers />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
