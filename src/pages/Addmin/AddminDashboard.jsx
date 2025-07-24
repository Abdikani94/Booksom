import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAdmin !== "true" || isAuthenticated !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <span className="text-white">Admin</span> <span className="text-yellow-400">Dashboard</span>
        </h1>
        <p className="text-gray-300 mb-12">Manage everything from one powerful panel.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <Link to="/admin/users" className="bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition-transform">
          <span className="text-2xl font-semibold mb-2">👥 Manage Users</span>
          <p className="text-sm text-gray-200 text-center">Add, update, and delete users.</p>
        </Link>

        <Link to="/admin/books" className="bg-[#065f46] hover:bg-[#047857] text-white p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition-transform">
          <span className="text-2xl font-semibold mb-2">📚 Manage Books</span>
          <p className="text-sm text-gray-200 text-center">Handle book listings, stock & details.</p>
        </Link>

        <Link to="/admin/bookings" className="bg-[#6b21a8] hover:bg-[#7e22ce] text-white p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition-transform">
          <span className="text-2xl font-semibold mb-2">📝 View Bookings</span>
          <p className="text-sm text-gray-200 text-center">Track user reservations & bookings.</p>
        </Link>
        <Link to="/admin/Contacts" className="bg-[#22bb5a] hover:bg-blue text-white p-8 rounded-2xl shadow-xl flex flex-col items-center hover:scale-105 transition-transform">
          <span className="text-2xl font-semibold mb-2">Contact Messages</span>
          <p className="text-sm text-gray-200 text-center">Track user reservations & Messages.</p>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
