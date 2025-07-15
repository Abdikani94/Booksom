import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-indigo-900 to-purple-900 p-8">
      {/* ↑ pt-24 ayaa meesha muhiimka ah */}

      <h1 className="text-5xl text-white font-bold mb-12 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/admin/users"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center transition-transform hover:scale-105"
        >
          <span className="text-2xl font-semibold mb-2">Manage Users</span>
          <p className="text-sm text-gray-200">View and manage all users.</p>
        </Link>

        <Link
          to="/admin/books"
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center transition-transform hover:scale-105"
        >
          <span className="text-2xl font-semibold mb-2">View Books</span>
          <p className="text-sm text-gray-200">Add, Update, Delete, and Search Books.</p>
        </Link>

        <Link
          to="/admin/bookings"
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center transition-transform hover:scale-105"
        >
          <span className="text-2xl font-semibold mb-2">View Bookings</span>
          <p className="text-sm text-gray-200">See all user bookings.</p>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
