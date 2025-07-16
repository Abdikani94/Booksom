import React, { useState } from 'react';

function AdminBooks() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Self Development',
      image: 'https://m.media-amazon.com/images/I/81bGKUa1e0L._AC_UF1000,1000_QL80_.jpg',
      description: 'A guide to building good habits and breaking bad ones.',
    },
    {
      id: 2,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      category: 'Finance',
      image: 'https://m.media-amazon.com/images/I/71G2ednj0JL._AC_UF1000,1000_QL80_.jpg',
      description: 'What the rich teach their kids about money.',
    },
    // ➕ Buugaag kale kusoo dar
  ]);

  const [search, setSearch] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
    image: '',
    description: '',
  });

  // Search function
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  // Delete Book
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  // Edit Button
  const handleEdit = (book) => {
    setIsEditing(true);
    setFormData(book);
    setIsFormVisible(true);
  };

  // Form Submit (Add / Update)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setBooks(books.map((b) => (b.id === formData.id ? formData : b)));
      setIsEditing(false);
    } else {
      const newBook = { ...formData, id: Date.now() };
      setBooks([...books, newBook]);
    }

    // Reset form
    setFormData({
      id: '',
      title: '',
      author: '',
      category: '',
      image: '',
      description: '',
    });

    setIsFormVisible(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Books - Admin</h1>

      {/* Top Actions */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/2"
        />

        <button
          onClick={() => {
            setIsFormVisible(!isFormVisible);
            setIsEditing(false);
            setFormData({
              id: '',
              title: '',
              author: '',
              category: '',
              image: '',
              description: '',
            });
          }}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          {isFormVisible ? 'Close Form' : 'Add New Book'}
        </button>
      </div>

      {/* Form */}
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mb-8 bg-gray-100 p-6 rounded-xl"
        >
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
            className="w-full border px-4 py-2 rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full border px-4 py-2 rounded"
            rows={3}
            required
          ></textarea>

          <button
            type="submit"
            className={`${
              isEditing
                ? 'bg-yellow-500 hover:bg-yellow-600'
                : 'bg-green-600 hover:bg-green-700'
            } text-white px-4 py-2 rounded`}
          >
            {isEditing ? 'Update Book' : 'Add Book'}
          </button>
        </form>
      )}

      {/* Table */}
      <table className="min-w-full border">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Author</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id} className="text-center">
              <td className="p-2 border">{book.id}</td>
              <td className="p-2 border">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-16 mx-auto rounded"
                />
              </td>
              <td className="p-2 border">{book.title}</td>
              <td className="p-2 border">{book.author}</td>
              <td className="p-2 border">{book.category}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleEdit(book)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBooks;
