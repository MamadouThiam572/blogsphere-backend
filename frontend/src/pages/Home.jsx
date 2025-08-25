import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    title: "Mon premier article",
    summary: "Découvrez l’essentiel de mon premier article sur le développement web.",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    title: "React et Tailwind",
    summary: "Apprenez à créer des interfaces modernes avec React et Tailwind CSS.",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    title: "Les secrets de Node.js",
    summary: "Pourquoi Node.js est idéal pour créer des API rapides et efficaces.",
    image: "https://picsum.photos/600/400?random=3",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold text-blue-600">BlogSphere</h1>
          <nav className="space-x-4">
            <a href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </a>
            <a href="/register" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
              Register
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20 bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <h2 className="text-5xl font-extrabold mb-4">Bienvenue sur BlogSphere</h2>
        <p className="text-xl max-w-xl">
          Découvrez les derniers articles et astuces en développement web, React, Node.js et plus encore.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#articles"
          className="mt-8 px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Voir les articles
        </motion.a>
      </section>

      {/* Articles Grid */}
      <main id="articles" className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-72 md:h-80 lg:h-96 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.summary}</p>
                </div>
                <a
                  href="#"
                  className="mt-auto inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Lire plus →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} BlogSphere. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};

export default Home;
