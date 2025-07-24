import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    author: '',
    category: '',
    price: '',
    stock:"",
    rating:"",
    description: '',
  });

  const BASE_URL = 'http://localhost:8080/api/books';

  // Fetch all books
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(BASE_URL);
      setBooks(res.data);
    } catch (err) {
      console.error('Failed to fetch books:', err);
    }
  };

  const filteredBooks = books.filter((book) =>
    (book.name || '').toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchBooks(); // Refresh
    }
  };

  const handleEdit = (book) => {
    setIsEditing(true);
    setFormData(book);
    setIsFormVisible(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`${BASE_URL}/${formData.id}`, formData);
      } else {
        await axios.post(BASE_URL, formData);
      }
      fetchBooks(); // Refresh
      setFormData({ id: '', name: '', author: '', category: '', price: '',stock:'', rating:"", description: '' });
      setIsEditing(false);
      setIsFormVisible(false);
    } catch (err) {
      console.error('Error saving book:', err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Books (Admin)</h1>

      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by book name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-1/2"
        />
        <button
          onClick={() => {
            setIsFormVisible(!isFormVisible);
            setIsEditing(false);
            setFormData({ id: '', name: '', author: '', category: '', price: '',stock:'', rating:"", description: '' });
          }}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          {isFormVisible ? 'Close Form' : 'Add New Book'}
        </button>
      </div>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-gray-100 p-6 rounded-xl">
          <input type="text" name="name" placeholder="Book Name" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="author" placeholder="Author" value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="category" placeholder="Category" value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="Price" placeholder="Price book " value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })} className="w-full border px-4 py-2 rounded" required />
                   
                   
            <input type="text" name="stock" placeholder="Stock " value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })} className="w-full border px-4 py-2 rounded" required />
                   <input type="text" name="rating" placeholder="Rating " value={formData.rating}
            onChange={(e) => setFormData({ ...formData, rating: e.target.value })} className="w-full border px-4 py-2 rounded" required />
          <textarea name="description" placeholder="Description" value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full border px-4 py-2 rounded" rows={3} required></textarea>
          <button type="submit"
            className={`${isEditing ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded`}>
            {isEditing ? 'Update Book' : 'Add Book'}
          </button>
        </form>
      )}

      <table className="min-w-full border">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Author</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Stock</th>
            <th className="p-3 border">Rating</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id} className="text-center">
              <td className="p-2 border">{book.id}</td>
              <td className="p-2 border">
                <img src={book.image} alt={book.name} className="h-16 mx-auto rounded" />
              </td>
              <td className="p-2 border">{book.author}</td>
              
              <td className="p-2 border">{book.price}</td>
              <td className="p-2 border">{book.category}</td>
              
              <td className="p-2 border">{book.stock}</td>
              <td className="p-2 border">{book.rating}</td>
             
              <td className="p-2 border space-x-2">
                <button onClick={() => handleEdit(book)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                <button onClick={() => handleDelete(book.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBooks;
