import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
  name: "Faheem",
  email: "faheem@example.com",
  password: "faheem",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    default:
      throw new Error("Unknown action");
  }
}

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [{ isAuthenticated, user }, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    user: null,
  });

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext used outside of a provider");
  return context;
}
