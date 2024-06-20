import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <article className="hover-grow">
      <Link to={`/articles/${article.article_id}`}>
        <div>
          <img src={article.article_img_url} />
          <div className="article-details">
            <p className="topic-tag">{article.topic}</p>
            <h3>{article.title}</h3>
          </div>
        </div>
        <span className="button more-button gradient">Read More</span>
      </Link>
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object,
};

export default ArticleCard;
