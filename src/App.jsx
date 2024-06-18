import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [articlesDisplaying, setArticlesDisplaying] = useState({
    start: 1,
    end: 9,
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              articles={articles}
              setArticles={setArticles}
              articlesDisplaying={articlesDisplaying}
              setArticlesDisplaying={setArticlesDisplaying}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
