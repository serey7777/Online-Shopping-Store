import { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const role = localStorage.getItem("role");
    if (token && role) {
      setUser({ token, role });
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  const login = async ({ username, password }) => {
    try {
      const response = await loginUser({ username, password });
      const { token, role } = response.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("role", role);
      setUser({ token, role });
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("role");
    setUser(null);
  };

  return (
      <AuthContext.Provider value={{ user, login, logout, loading }}>
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);