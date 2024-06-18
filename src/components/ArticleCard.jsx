import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <article>
      <div>
        <img src={article.article_img_url} />
        <div className="article-details">
          <p>{article.topic}</p>
          <h3>{article.title}</h3>
        </div>
      </div>
      <Link
        to={`/articles/${article.article_id}`}
        className="button more-button"
      >
        Read More
      </Link>
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object,
};

export default ArticleCard;
