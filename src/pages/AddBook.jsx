import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook({ books, setBooks }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { ...formData, id: Date.now() };
    setBooks([...books, newBook]);
    navigate('/admin/books');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full border px-4 py-2 rounded"
          rows={4}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
