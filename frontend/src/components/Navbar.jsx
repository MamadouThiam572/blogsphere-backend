import { Link } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">BlogSphere</Link>
      <div className="space-x-4">
        {user ? (
          <>
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
