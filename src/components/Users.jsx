import { useEffect, useState } from "react";
import { getUsers } from "../../api.js";
import ErrorComponent from "./ErrorComponent.jsx";
import Loading from "./Loading.jsx";
import "../styles/users.css";
import { Link } from "react-router-dom";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then(({ users }) => {
        setUsersList(users);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <main className="container users-page">
      <h1>Authors</h1>
      <p className="sub-title">Select The Author You Would Like To Explore:</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="user-list">
          {usersList.map((user, index) => {
            return (
              <Link
                className="user-card"
                key={index}
                to={`/users/${user.username}`}
              >
                <img src={user.avatar_url} alt="" />
                <p>{user.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Users;
