import react, { useEffect, useState } from "react";

export const AuthContext = react.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const setUserName = (username) => {
    setUser(username);
  };

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("user"));
    if (userName) {
      setUser(userName);
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);
  return (
    <AuthContext.Provider value={{ user, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};
