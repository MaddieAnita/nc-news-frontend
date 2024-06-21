import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

const FeaturedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredArticles, setFeaturedArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const props = {
      featuredQuery: true,
      limit: 3,
    };
    getArticles(props)
      .then(({ articles }) => {
        setFeaturedArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <section className="container featured">
      <h2>Featured Posts:</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="featured-posts">
          {featuredArticles.map((article, index) => {
            return <ArticleCard key={index} article={article} />;
          })}
        </section>
      )}
    </section>
  );
};

export default FeaturedPosts;
