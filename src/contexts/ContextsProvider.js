import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Corrected import

const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(sessionStorage.getItem("loggedInUser")) || null
  );
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const [CurrentStepOfstockSendRecive, setCurrentStepOfstockSendRecive] =
    useState({ step: 0, formType: "" });

  useEffect(() => {
    sessionStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
    }
  }, [loggedInUser, token]);

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    setLoggedInUser(decodedToken);
    setToken(token);
  };

  const logout = () => {
    setLoggedInUser(null);
    setToken(null);
    sessionStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("token");
  };

  const setTheStockShareStep = (currentStep, currentForm) => {
    console.log("setTheStockShareStep: ", currentStep);
    setCurrentStepOfstockSendRecive({ currentStep, currentForm });
  };
  const getTheStockShareStep = () => {
    return CurrentStepOfstockSendRecive;
  };

  console.log("CurrentStepOfstockSendRecive - ", CurrentStepOfstockSendRecive);

  return (
    <GlobalContext.Provider
      value={{
        loggedInUser,
        token,
        login,
        logout,
        setTheStockShareStep,
        getTheStockShareStep,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, ContextProvider };
