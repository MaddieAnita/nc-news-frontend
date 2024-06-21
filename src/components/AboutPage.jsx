import "../styles/about-page.css";

const AboutPage = () => {
  return (
    <section className="container about-page">
      <h1>About This Project</h1>
      <h2>What is it for?</h2>
      <p>
        This is a portfolio piece created by{" "}
        <a target="_blank" href="https://github.com/MaddieAnita">
          Maddie Anita
        </a>
      </p>
      <p>
        Over 4.5 days, we were tasked to used React to build a working frontend
        application. This website is a news website showcasing the use of the
        API we build in our backend project
      </p>
      <p>You can view the working demo API here: </p>
      <a
        className="button"
        target="_blank"
        href="https://nc-news-api-e143.onrender.com/api"
      >
        DEMO API
      </a>
      <p>
        You can view the source code for the API here:{" "}
        <a target="_blank" href="https://github.com/MaddieAnita/nc-news">
          API Source Code
        </a>
      </p>
      <p>
        You can view the source code for this project here:{" "}
        <a href="https://github.com/MaddieAnita/nc-news-frontend/">
          Source Code
        </a>
      </p>
      <h2>What tech stack does it have?</h2>
      <p>This NC News Website is using the following technologies:</p>
      <ul>
        <li>React JS</li>
        <li>React Icons</li>
        <li>Axios</li>
        <li>React Router</li>
      </ul>
      <h2>What can it do so far?</h2>
      <p>
        {" "}
        This application does not user any Authentication and therefore users
        can be manually selected to change &apos;user&apos; profiles through the
        Users menu option.
      </p>
      <h3>Header: </h3>
      <ul>
        <li>Includes categories in a sub menu of Topics</li>
        <li>
          Has link to logged in user profile page, which is stored in
          localStorage
        </li>
      </ul>
      <h3>Home: </h3>
      <ul>
        <li>
          View categories, featured articles, all articles including pagination
        </li>
        <li>Users can sort all articles by Sort By, Order and Featured</li>
      </ul>
      <h3>Single Article: </h3>
      <ul>
        <li>Brings back all information for that article</li>
        <li>Users can vote positively or negatively on article</li>
        <li>Lists all comments related to article including pagination</li>
        <li>Users can post new comment</li>
        <li>Includes error and success handling for user feedback</li>
      </ul>
      <h3>Single Topic: </h3>
      <ul>
        <li>lists all article within that topic including pagination</li>
        <li>Users can sort all articles by Sort By, Order and Featured</li>
        <li>Includes error and success handling for user feedback</li>
      </ul>
      <h2>Features to come:</h2>
      <p>Features in the pipeline:</p>
      <ul>
        <li>Enable logged in user to post new article</li>
        <li>Add featured posts</li>
        <li>Refactor loading state</li>
        <li>Refactor submenu</li>
        <li>Add home link to logo</li>
        <li>Add empty categories (to showcase no articles)</li>
        <li>Refactor order by select to icon toggle</li>
        <li>
          Refector comment cards to include icons next to votes which toggles if
          positive or nagative
        </li>
        <li>Add ability to votes on comments</li>
        <li>Add vote count and comment count to article cards</li>
        <li>
          Extend user profiles to allow for bio, cover photo and social media
          links
        </li>
        <li>Refactor authors profile page to showcase new profile abilites</li>
        <li>Enable logged in users to edit their profiles</li>
        <li>Add better responsive design for mobiles</li>
        <li>Add Mobile Menu</li>
      </ul>
    </section>
  );
};

export default AboutPage;
