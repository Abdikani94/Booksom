import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      window.location.href = "/login";
    } else {
      fetchBookings();
    }
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/bookings");
      setBookings(res.data);
    } catch (err) {
      console.error("Failed to fetch bookings", err);
    }
  };

  const handleAccept = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/bookings/${id}/accept`);
      setBookings((prev) =>
        prev.map((b) =>
          b.id === id ? { ...b, status: "Accepted" } : b
        )
      );
    } catch (err) {
      console.error("Failed to accept booking", err);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Book Booking Requests</h1>
      <div className="overflow-auto rounded-lg shadow bg-white">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3">ID</th>
              <th className="p-3">User</th>
              <th className="p-3">Book</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{b.id}</td>
                <td className="p-3">{b.fullName}</td>
                <td className="p-3">{b.bookTitle}</td>
                <td className="p-3">
                  {b.startDate} - {b.endDate}
                </td>
                <td className="p-3">{b.email}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      b.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {b.status || "Pending"}
                  </span>
                </td>
                <td className="p-3">{new Date(b.createdAt).toLocaleString()}</td>
                <td className="p-3">
                  {b.status !== "Accepted" && (
                    <button
                      onClick={() => handleAccept(b.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Accept
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;
