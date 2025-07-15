import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../Data/books';

function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-pink-100 dark:from-gray-900 dark:to-gray-800">
        <p className="text-2xl text-red-500 font-semibold">📕 Book Not Found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto bg-white/20 dark:bg-white/10 border border-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-10 transition-all duration-500">
        {/* Book Image */}
        <div className="md:w-1/2">
          <img
            src={book.image}
            alt={book.title}
            className="w-full rounded-2xl shadow-xl border border-white/40"
          />
        </div>

        {/* Book Info */}
        <div className="md:w-1/2 text-gray-800 dark:text-gray-200">
          <h1 className="text-4xl font-extrabold mb-4 text-purple-700 dark:text-purple-300">
            {book.title}
          </h1>
          <p className="text-lg font-medium mb-2">
            <span className="font-semibold text-indigo-600 dark:text-indigo-300">Author:</span> {book.author}
          </p>
          <p className="text-md mb-4 italic">
            <span className="font-semibold text-indigo-600 dark:text-indigo-300">Category:</span> {book.category}
          </p>
          <p className="mb-6 text-justify leading-relaxed text-gray-700 dark:text-gray-300">
            {book.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              to="/books"
              className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 shadow-lg transition duration-300 text-center"
            >
              🔙 Back to Books
            </Link>
            <Link
              to={`/books/booking/${book.id}`}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 shadow-lg transition duration-300 text-center"
            >
              📚 Booking Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
