import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/messages");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(`http://localhost:8080/api/messages/${id}`);
        setMessages(messages.filter((msg) => msg.id !== id));
      } catch (err) {
        console.error("Failed to delete message", err);
      }
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-10 px-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition">
      <h1 className="text-3xl font-bold mb-6 text-center">📨 Contact Messages</h1>

      {messages.length === 0 ? (
        <p className="text-center text-gray-500">No messages found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700 text-left">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Received At</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="border-b border-gray-300 dark:border-gray-600">
                  <td className="py-3 px-4">{msg.name}</td>
                  <td className="py-3 px-4">{msg.email}</td>
                  <td className="py-3 px-4 max-w-sm">{msg.message}</td>
                  <td className="py-3 px-4">
                    {new Date(msg.receivedAt).toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;