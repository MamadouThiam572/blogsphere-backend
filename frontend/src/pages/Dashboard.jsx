import { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importez le thème CSS

export default function Dashboard() {
  // États pour gérer l'affichage du formulaire et le contenu de l'article
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Configuration de la toolbar de React Quill
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Titre:", title);
    console.log("Contenu HTML:", content);
    // Ici, vous enverrez les données à votre API backend plus tard
    // Réinitialiser le formulaire et fermer l'éditeur
    setTitle('');
    setContent('');
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

        {/* Bouton pour ouvrir/fermer l'éditeur */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
        >
          {isEditing ? 'Annuler' : 'Nouvel article'}
        </button>

        {/* Formulaire d'édition (affiché conditionnellement) */}
        {isEditing && (
          <form onSubmit={handleSubmit} className="mb-8 p-4 border rounded-lg">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Titre de l'article
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Entrez le titre de votre article"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contenu de l'article
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                className="bg-white rounded-lg"
              />
            </div>

            <div className="flex space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Publier
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Annuler
              </button>
            </div>
          </form>
        )}

        <h2 className="text-2xl font-semibold mt-6 mb-4">Mes articles</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center p-3 border rounded">
            <span>Article 1</span>
            <div>
              <button className="text-blue-500 hover:underline mr-4">Modifier</button>
              <button className="text-red-500 hover:underline">Supprimer</button>
            </div>
          </li>
          <li className="flex justify-between items-center p-3 border rounded">
            <span>Article 2</span>
            <div>
              <button className="text-blue-500 hover:underline mr-4">Modifier</button>
              <button className="text-red-500 hover:underline">Supprimer</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}