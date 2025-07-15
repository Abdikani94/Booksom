import React, { useState, useEffect } from 'react';

function UpdateBookModal({ isOpen, onClose, onUpdate, book }) {
  const [updatedBook, setUpdatedBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  useEffect(() => {
    if (book) {
      setUpdatedBook({
        title: book.title,
        author: book.author,
        category: book.category,
      });
    }
  }, [book]);

  const handleChange = (e) => {
    setUpdatedBook({ ...updatedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(book.id, updatedBook);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 font-bold">Update Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={updatedBook.title}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={updatedBook.author}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={updatedBook.category}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateBookModal;
