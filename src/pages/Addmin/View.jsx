import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdateBookModal from '../../Components/Model/UpdateBookModel';
import AddBookModal from '../../Components/Model/AddBookModal';

function AdminViewBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/admin/books');
      setBooks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await axios.delete(`http://localhost:8080/api/admin/books/${id}`);
        setBooks(books.filter((book) => book.id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleUpdate = async (id, updatedBook) => {
    try {
      await axios.put(`http://localhost:8080/api/admin/books/${id}`, updatedBook);
      setBooks(books.map((book) => (book.id === id ? { ...book, ...updatedBook } : book)));
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async (newBook) => {
    try {
      const res = await axios.post(`http://localhost:8080/api/admin/books`, newBook);
      setBooks([...books, res.data]);
      setIsAddModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-indigo-700">📚 Manage Books</h1>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow transition duration-200"
          >
            ➕ Add New Book
          </button>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search books..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="min-w-full table-auto text-sm text-left text-gray-700">
            <thead className="bg-indigo-700 text-white text-sm uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3">{book.id}</td>
                  <td className="px-4 py-3">{book.title}</td>
                  <td className="px-4 py-3">{book.author}</td>
                  <td className="px-4 py-3">{book.category}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                      <button
                        className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                        onClick={() => {
                          setSelectedBook(book);
                          setIsModalOpen(true);
                        }}
                      >
                        ✏️ Update
                      </button>
                      <button
                        className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                        onClick={() => handleDelete(book.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredBooks.length === 0 && (
            <p className="text-center text-gray-500 py-6">No books found.</p>
          )}
        </div>
      </div>

      {/* Update Modal */}
      <UpdateBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdate}
        book={selectedBook}
      />

      {/* Add Modal */}
      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default AdminViewBooks;
