import React, { useEffect } from "react";
import { useCart } from "../Components/Context/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, []);

  return (
    <div className="pt-[120px] pb-[120px] min-h-screen bg-gray-100 dark:bg-[#0c0f1f] flex items-start justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-white dark:bg-[#1c2237] shadow-xl rounded-xl p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
            🛒 Your Shopping Cart
          </h2>

          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Your cart is currently empty.
              </p>
              <Link
                to="/"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition"
              >
                Browse Books
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((book) => {
                const quantity = book.quantity || 1;
                return (
                  <div
                    key={book.id}
                    className="flex items-center gap-4 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-[#101322]"
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-20 h-28 object-cover rounded border border-gray-300 dark:border-gray-600"
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Author: {book.author}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-2">
                        Category: {book.category}
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(book.id, quantity - 1)}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
                          disabled={quantity <= 1}
                        >
                          <FaMinus />
                        </button>
                        <span className="text-base font-medium dark:text-white">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(book.id, quantity + 1)}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          <FaPlus />
                        </button>
                      </div>

                      <p className="text-green-600 font-bold mt-2">
                        ${book.price.toFixed(2)} x {quantity} = $
                        {(book.price * quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => removeFromCart(book.id)}
                        className="text-red-500 hover:text-red-700"
                        title="Remove"
                      >
                        <FaTrash />
                      </button>
                    
                    </div>
                  </div>
                );
              })}

              <div className="bg-violet-50 dark:bg-[#181c2f] border-t border-gray-200 dark:border-gray-700 pt-6 rounded-lg p-4 transition-colors">
                <p className="text-xl font-semibold text-gray-800 dark:text-white text-right">
                  Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""}):{" "}
                  <span className="text-green-600">${total}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-right">
                  Includes selected gifts.
                </p>

                <div className="text-right mt-6">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
