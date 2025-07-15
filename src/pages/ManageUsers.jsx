import React, { useState } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ali Mohamed', email: 'ali@gmail.com', role: 'User' },
    { id: 2, name: 'Ayaan Ahmed', email: 'ayaan@gmail.com', role: 'Admin' },
    { id: 3, name: 'Zahra Ismail', email: 'zahra@gmail.com', role: 'User' },
  ]);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this user?');
    if (isConfirmed) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  const handleRoleChange = (id) => {
    const updatedUsers = users.map(user =>
      user.id === id
        ? { ...user, role: user.role === 'User' ? 'Admin' : 'User' }
        : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Manage Users
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-indigo-700 text-white">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={user.id}
                    className="text-center hover:bg-gray-100 transition"
                  >
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2 text-left">{user.name}</td>
                    <td className="border px-4 py-2 text-left">{user.email}</td>
                    <td className="border px-4 py-2">{user.role}</td>
                    <td className="border px-4 py-2 flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleRoleChange(user.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded transition duration-200"
                        title={`Change role to ${user.role === 'User' ? 'Admin' : 'User'}`}
                      >
                        {user.role === 'User' ? 'Make Admin' : 'Make User'}
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded transition duration-200"
                        title="Delete user"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    🚫 No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
