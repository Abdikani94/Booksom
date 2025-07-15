import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Data/books'

function EditBook({ books, setBooks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const bookToEdit = books.find((b) => b.id === parseInt(id));

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    if (bookToEdit) {
      setFormData({
        title: bookToEdit.title,
        author: bookToEdit.author,
        category: bookToEdit.category,
        image: bookToEdit.image,
        description: bookToEdit.description,
      });
    }
  }, [bookToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBooks = books.map((b) =>
      b.id === parseInt(id) ? { ...b, ...formData } : b
    );

    setBooks(updatedBooks);
    navigate('/admin/books');
  };

  if (!bookToEdit) {
    return <div className="p-6 text-red-500">Book Not Found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Book: {bookToEdit.title}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Book Title"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border px-4 py-2 rounded"
          rows={4}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Update Book
        </button>
      </form>
    </div>
  );
}

export default EditBook;
