import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedInUser")) || null
  );
  const [token, setToken] = useState(null);

  useEffect(() => {
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  const login = (token) => {
    const decodedToken = jwtDecode(token);

    setLoggedInUser(decodedToken);
    setToken(token);
  };

  const logout = () => {
    setLoggedInUser(null);
    setToken(null);
    sessionStorage.removeItem("loggedInUser");
  };

  return (
    <GlobalContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, ContextProvider };
