import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // État de chargement initial

  // Vérifier au chargement si un token est déjà stocké
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      try {
        setUser(JSON.parse(userData)); // Essayez de parser les données utilisateur
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        logout(); // En cas d'erreur, déconnectez pour nettoyer
      }
    }
    setLoading(false); // Fin du chargement initial
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData)); // Stockez les infos user
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    loading // Exportez l'état loading si besoin (pour afficher un spinner)
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}