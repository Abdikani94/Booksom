import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PageLogout({ setAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, user: null });
    navigate("/");
  };

  const handleCancel = () => {
    navigate(-1); // Dib ugu celi page-kii hore
  };

  return (
    <div className="pt-28 min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0c0f1f] px-4 py-12 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-[#1c2237] p-8 rounded-2xl shadow-2xl text-center transition-colors duration-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Are you sure you want to logout?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-200 shadow-md"
          >
            Yes, Logout
          </button>
          <button
            onClick={handleCancel}
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-900 px-6 py-3 rounded-xl font-semibold transition duration-200 shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageLogout;
