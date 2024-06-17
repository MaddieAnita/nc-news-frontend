import PropTypes from "prop-types";
import ArticleCard from "./ArticleCard";
import "../styles/articles.css";

const ArticleList = ({ articles }) => {
  return (
    <div className="articles-list">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array,
};

export default ArticleList;
