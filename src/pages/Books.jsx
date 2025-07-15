import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/Context/CartContext";
import { books as bookData } from "../Data/books"; // ✅ Local data import
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Fade } from "react-awesome-reveal";

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />);
  }
  while (stars.length < 5) {
    stars.push(
      <FaRegStar key={`empty-${stars.length}`} className="text-yellow-400 text-sm" />
    );
  }
  return stars;
}

function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTag, setActiveTag] = useState("All");
  const { addToCart } = useCart();
  const booksPerPage = 8;
  const tagFilters = ["All", "Trending", "New", "Classic"];

  // ✅ Load from local data
  useEffect(() => {
    setBooks(bookData);
  }, []);

  const categories = ["All", ...new Set(books.map((b) => b.category))];

  let filteredBooks = books
    .filter(
      (book) =>
        (book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.category?.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterCategory === "All" || book.category === filterCategory) &&
        (activeTag === "All" || (book.tags && book.tags.includes(activeTag)))
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "popularity") return (b.ratingCount || 0) - (a.ratingCount || 0);
      return 0;
    });

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="min-h-screen pt-28 bg-gradient-to-br from-[#fefefe] to-[#f5f5f5]">
      {/* Banner */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat p-16 md:p-28 mb-12 rounded-3xl shadow-2xl text-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Explore Bestselling Books Under $50
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-light drop-shadow-md">
            Curated collections, trending titles, and classic must-haves.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-8 px-4">
        <input
          type="text"
          placeholder="🔍 Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-5 py-3 rounded-xl bg-white border border-gray-300 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-400"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-5 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 font-medium shadow-sm focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-5 py-3 rounded-xl bg-white border border-gray-300 text-gray-800 font-medium shadow-sm focus:outline-none"
        >
          <option value="default">Sort By</option>
          <option value="price">Price: Low to High</option>
          <option value="rating">Rating: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>

      {/* Tag Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
        {tagFilters.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 text-sm rounded-full border transition ${
              activeTag === tag
                ? "bg-yellow-500 text-white border-yellow-600 shadow"
                : "bg-white text-gray-800 border-gray-300 hover:bg-yellow-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentBooks.length > 0 ? (
            currentBooks.map((book) => (
              <Fade triggerOnce direction="up" key={book.id}>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="relative w-full h-[280px] overflow-hidden rounded-t-xl">
                    {book.discount && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                        -{book.discount}%
                      </span>
                    )}
                    <button className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/70 p-1.5 rounded-full z-10 transition">
                      <FaRegHeart className="text-lg" />
                    </button>
                    <LazyLoadImage
                      src={book.image}
                      alt={book.title}
                      effect="blur"
                      className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h2 className="text-lg font-semibold text-gray-900 truncate">{book.title}</h2>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <p className="text-xs text-gray-400 italic">{book.category}</p>
                    <div className="flex items-center text-sm">{renderStars(book.rating || 4.5)}</div>
                    <p className="text-base font-bold text-green-600">${book.price}</p>
                    <p className="text-xs text-gray-500">{book.stock} in stock</p>
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => addToCart(book)}
                        className="text-sm flex items-center gap-1 text-yellow-600 hover:text-yellow-700 transition"
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>
                      <div className="flex gap-2">
                        <Link
                          to={`/books/${book.id}`}
                          className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-md transition"
                        >
                          View
                        </Link>
                        <Link
                          to={`/books/booking/${book.id}`}
                          className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-md transition"
                        >
                          Book
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-700 text-xl font-semibold">
              🚫 No books found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-14 mb-10 space-x-2">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                onClick={() => setCurrentPage(page + 1)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition duration-300 ${
                  currentPage === page + 1
                    ? "bg-yellow-500 text-white shadow"
                    : "bg-gray-200 hover:bg-yellow-100 text-gray-800"
                }`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
