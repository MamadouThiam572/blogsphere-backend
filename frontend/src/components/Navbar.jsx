import { Link } from "react-router-dom";
import { useAuth } from "../components/Context/AuthContext"; 
function Navbar() {
  const { user, logout, loading } = useAuth(); // Récupérez aussi 'loading'

  // Pendant le chargement initial, affichez une navbar minimaliste ou un placeholder
  if (loading) {
    return (
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">BlogSphere</Link>
        <div>Chargement...</div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">BlogSphere</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <span>Bonjour, {user.email || user.username}!</span>
            <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
            <button onClick={logout} className="hover:text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-500">Login</Link>
            <Link to="/register" className="hover:text-blue-500">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;