import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Components/Context/CartContext";
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
import { books } from "../Data/books";

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-300 text-sm" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-300 text-sm" />);
  }
  while (stars.length < 5) {
    stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-300 text-sm" />);
  }
  return stars;
}

function Books({ auth }) {
  const [booksState, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const booksPerPage = 8;

  useEffect(() => {
    setBooks(books);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const categories = ["All", ...new Set(booksState.map((b) => b.category))];

  const filteredBooks = booksState
    .filter((b) =>
      (b.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.category?.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterCategory === "All" || b.category === filterCategory)
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "popularity") return (b.ratingCount || 0) - (a.ratingCount || 0);
      return 0;
    });

  const indexOfLast = currentPage * booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfLast - booksPerPage, indexOfLast);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="min-h-screen pt-28 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="w-full relative p-16 md:p-28 mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=compress&cs=tinysrgb&h=1080')",
          }}
        />
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm rounded-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Your Story, Your Book, Your Way
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-light">
            Explore a world of stories and knowledge with every page.
          </p>
          <div className="mt-8">
            <button
              onClick={() => {
                const el = document.getElementById("explore-books");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-md transition"
            >
              Explore Books
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-10 px-4">
        <input
          type="text"
          placeholder="🔍 Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-5 py-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-yellow-400"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-5 py-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-medium shadow-sm focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-5 py-3 rounded-xl bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-medium shadow-sm focus:outline-none"
        >
          <option value="default">Sort By</option>
          <option value="price">Price: Low to High</option>
          <option value="rating">Rating: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>

      {/* Book Grid */}
      <div id="explore-books" className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentBooks.length ? (
            currentBooks.map((book) => (
              <Fade triggerOnce direction="up" key={book.id}>
                <div className="bg-black/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 overflow-hidden group flex flex-col">
                  <div className="relative w-full aspect-[2/3] bg-gray-200 dark:bg-gray-800">
                    {book.discount && (
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10 font-semibold shadow">
                        -{book.discount}%
                      </span>
                    )}
                    <button className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full z-10 transition">
                      <FaRegHeart className="text-base" />
                    </button>
                    <LazyLoadImage
                      src={book.image}
                      alt={book.title}
                      effect="blur"
                      className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 text-white space-y-2 flex flex-col flex-grow">
                    <div className="space-y-0.5">
                      <h2 className="text-lg font-semibold truncate">{book.title}</h2>
                      <p className="text-sm text-gray-300 truncate">{book.author}</p>
                      <p className="text-xs italic text-gray-400">{book.category}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm pt-1">
                      <div className="flex">{renderStars(book.rating || 4.5)}</div>
                      <span className="text-xs text-gray-400">{book.stock} in stock</span>
                    </div>

                    <p className="text-base font-bold text-green-400">${book.price}</p>

                    <div className="mt-auto pt-3 flex justify-between items-center">
                      <button
                        onClick={() => {
                          if (auth?.isAuthenticated) {
                            addToCart(book);
                          } else {
                            alert("Please login to add to cart.");
                            navigate("/login");
                          }
                        }}
                        className="flex items-center gap-1 text-dark-400 hover:text-dark-300 text-sm transition"
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>

                      <div className="flex gap-2">
                        <Link
                          to={`/books/${book.id}`}
                          className="text-sm px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-300 text-black font-semibold transition"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => {
                            if (auth?.isAuthenticated) {
                              navigate(`/books/booking/${book.id}`);
                            } else {
                              alert("Please login to book.");
                              navigate("/login");
                            }
                          }}
                          className="text-sm px-3 py-1.5 rounded-md bg-gradient-to-r from-green-500 to-green-400 hover:from-green-400 hover:to-green-300 text-black font-semibold transition"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-700 dark:text-gray-300 text-xl font-semibold">
              🚫 No books found.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-14 mb-10 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition duration-300 ${
                  currentPage === i + 1
                    ? "bg-yellow-500 text-white shadow"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-yellow-100 dark:hover:bg-yellow-600 text-gray-800 dark:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
