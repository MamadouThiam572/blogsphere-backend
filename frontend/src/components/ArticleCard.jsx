// src/components/ArticleCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-600 mb-3">{article.excerpt}</p>
      <Link
        to={`/article/${article.id}`}
        className="text-blue-500 hover:underline"
      >
        Lire plus →
      </Link>
    </div>
  );
}

export default ArticleCard;
