import { Link } from "react-router-dom";

export default function Profile() {
  const username = "BlogueurExemple";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div>
            <h2 className="text-2xl font-bold">{username}</h2>
            <p className="text-gray-600">Bio de l'utilisateur...</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Articles publiés</h3>
        <ul className="space-y-2">
          <li>
            <Link className="text-blue-500 hover:underline" to="/article/1">
              Article 1
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 hover:underline" to="/article/2">
              Article 2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
