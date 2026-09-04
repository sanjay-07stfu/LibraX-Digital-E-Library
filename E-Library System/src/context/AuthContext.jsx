import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("librax_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    if (email === "admin@librax.com" && password === "admin123") {
      const admin = {
        name: "Admin",
        email,
        role: "admin",
      };

      localStorage.setItem("librax_user", JSON.stringify(admin));
      setUser(admin);
      return { success: true };
    }

    if (email === "student@librax.com" && password === "student123") {
      const student = {
        name: "Sanjay",
        email,
        role: "user",
      };

      localStorage.setItem("librax_user", JSON.stringify(student));
      setUser(student);
      return { success: true };
    }

    return {
      success: false,
      message: "Invalid email or password",
    };
  };

  const register = (name, email, password) => {
    const newUser = {
      name,
      email,
      password,
      role: "user",
    };

    localStorage.setItem("librax_registered_user", JSON.stringify(newUser));

    const loggedUser = {
      name,
      email,
      role: "user",
    };

    localStorage.setItem("librax_user", JSON.stringify(loggedUser));
    setUser(loggedUser);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("librax_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}