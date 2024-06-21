import { UserContext } from "../context/User.jsx";
import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../api.js";
import ErrorComponent from "./ErrorComponent.jsx";
import Loading from "./Loading.jsx";
import "../styles/users.css";
import { Link } from "react-router-dom";

const SwitchUsers = () => {
  const [usersList, setUsersList] = useState([]);
  const { setUser } = useContext(UserContext);
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
      <h1>Users</h1>
      <p className="sub-title">Select The User You Wish To Log In As:</p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="user-list">
          {usersList.map((user, index) => {
            return (
              <Link
                className="user-card"
                key={index}
                onClick={() => {
                  setUser(user);
                }}
                to={`/profile/${user.username}`}
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

export default SwitchUsers;
