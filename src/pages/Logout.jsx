import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext/AuthContext";

function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-indigo-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Library</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">
          Books
        </Link>

        {isAuthenticated && (
          <Link to="/add" className="hover:underline">
            Add Book
          </Link>
        )}

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="hover:underline bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
