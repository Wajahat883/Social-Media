import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("mockUsers")) || [];
    setUser(users);
  }, []);

  useEffect(() => {
    localStorage.setItem("mockUsers", JSON.stringify(user));
  }, [user]);

  const login = (username, password) => {
    const existingUser = user.find(
      (u) => u.username === username && u.password === password
    );
    if (!existingUser) throw new Error("Invalid credentials");
    setCurrentUser(existingUser);
    localStorage.setItem("user", JSON.stringify(existingUser));
  };

  const signup = (username, password, email) => {
    const userExists = user.find((u) => u.email === email);
    if (userExists) throw new Error("User already exists");
    const newUser = { id: Date.now(), username, email, password };
    setUser([...user, newUser]);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext);
