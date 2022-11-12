import react, { useEffect, useState } from "react";

export const AuthContext = react.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const setUserName = (username) => {
    setUser(username);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUserName }}>
      {children}
    </AuthContext.Provider>
  );
};
