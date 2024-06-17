import PropTypes from "prop-types";

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
      <button className="more-button">Read More</button>
    </article>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object,
};

export default ArticleCard;
