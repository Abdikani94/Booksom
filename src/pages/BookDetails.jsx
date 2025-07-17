import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { books } from "../Data/books";

function BookDetails({ auth }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundBook = books.find((b) => String(b.id) === String(id));
    setBook(foundBook);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-xl text-gray-500 dark:text-gray-300">⏳ Loading book details...</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-pink-100 dark:from-gray-900 dark:to-gray-800">
        <p className="text-2xl text-red-500 font-semibold">📕 Book Not Found</p>
      </div>
    );
  }

  const handleBooking = () => {
    if (auth?.isAuthenticated) {
      navigate(`/books/booking/${book.id}`);
    } else {
      alert("Please login to book this book.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 bg-[#1e293b] rounded-3xl p-6 md:p-10 shadow-2xl">
        {/* Book Image */}
        <div className="md:w-1/2">
          <img
            src={book.image}
            alt={book.title}
            className="rounded-2xl w-full object-cover shadow-lg border border-white/20"
          />
          <div className="flex mt-4 space-x-4 overflow-x-auto">
            <img
              src={book.image}
              alt="Thumb 1"
              className="w-24 h-16 rounded-md object-cover border-2 border-red-500"
            />
            <div className="w-24 h-16 flex items-center justify-center bg-gray-700 rounded-md text-sm">
              Image Not Found
            </div>
            <div className="w-24 h-16 bg-gray-600 rounded-md" />
            <div className="w-24 h-16 bg-gray-600 rounded-md" />
          </div>
        </div>

        {/* Book Info */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold text-white">{book.title}</h1>
          <p className="text-red-500 text-xl font-bold">Starting at ${book.price}</p>
          <p className="text-gray-300">
            Experience the story of <span className="font-semibold">{book.title}</span> by {book.author}. Dive into the {book.category} genre with a rating of {book.rating} stars. An immersive book perfect for your next read.
          </p>

          <button
            onClick={handleBooking}
            className="inline-block mt-4 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 font-semibold"
          >
            📚 Book Now
          </button>

          {/* Specifications */}
          <div className="mt-6 border-t border-gray-600 pt-4">
            <h3 className="text-xl font-semibold mb-2">Specifications:</h3>
            <ul className="space-y-1">
              <li><span className="font-semibold text-gray-400">Author:</span> {book.author}</li>
              <li><span className="font-semibold text-gray-400">Category:</span> {book.category}</li>
              <li><span className="font-semibold text-gray-400">Rating:</span> {book.rating}</li>
              <li><span className="font-semibold text-gray-400">Stock:</span> {book.stock}</li>
              <li><span className="font-semibold text-gray-400">Price:</span> ${book.price}</li>
            </ul>
          </div>

          {/* Back Button */}
          <Link
            to="/books"
            className="inline-block mt-6 bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-300"
          >
            🔙 Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
