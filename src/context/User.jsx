import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const LoggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));

  const initialUser = {
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  };
  const [user, setUser] = useState(() => {
    if (LoggedInUser) {
      return LoggedInUser;
    } else {
      return initialUser;
    }
  });

  useEffect(() => {
    localStorage.setItem("LoggedInUser", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object,
};
