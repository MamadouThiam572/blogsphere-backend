import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Titre de l'article {id}</h1>
        <p className="text-gray-700 mb-6">
          Contenu de l'article avec mise en page Medium-like. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Like</button>
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition">Commenter</button>
        </div>
      </div>
    </div>
  );
}
