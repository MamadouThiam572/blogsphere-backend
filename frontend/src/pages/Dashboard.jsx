import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
        <Link
          to="/editor"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4 inline-block"
        >
          Nouvel article
        </Link>
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
