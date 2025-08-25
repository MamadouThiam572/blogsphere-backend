import { createContext, useContext, useState } from "react";

// Création du contexte
const AuthContext = createContext();

// Hook pour utiliser le contexte
export function useAuth() {
  return useContext(AuthContext);
}

// Composant Provider (export par défaut)
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
