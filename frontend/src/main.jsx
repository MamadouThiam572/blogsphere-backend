import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // ← Assurez-vous que Tailwind est importé ici
import AuthProvider from "./components/Context/AuthContext.jsx"; // ← correspond à l’export par défaut

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
