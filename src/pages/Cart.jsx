import React from "react";
import { useCart } from "../Components/Context/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center bg-white shadow-md p-6 rounded-lg">
          <p className="text-lg text-gray-600">Your cart is currently empty.</p>
          <Link
            to="/"
            className="inline-block mt-4 text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-full transition"
          >
            Browse Books
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((book) => {
            const quantity = book.quantity || 1;
            return (
              <div
                key={book.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 mb-4 rounded-xl shadow border border-gray-200 hover:shadow-lg transition"
              >
                <div className="w-24 h-32 overflow-hidden rounded-md border border-gray-300">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-[200px]">
                  <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                  <p className="text-sm text-gray-600">Author: {book.author}</p>
                  <p className="text-xs text-gray-500 italic">
                    Category: {book.category}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(book.id, quantity - 1)}
                      className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      disabled={quantity <= 1}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-base font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(book.id, quantity + 1)}
                      className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="text-base text-green-600 font-bold mt-2">
                    ${book.price.toFixed(2)} x {quantity} = ${(book.price * quantity).toFixed(2)}
                  </p>

                  <div className="flex gap-4 mt-3 text-sm">
                    <button className="text-blue-600 hover:underline cursor-pointer">
                      Save for later
                    </button>
                    <button className="text-blue-600 hover:underline cursor-pointer">
                      Share
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <label className="text-sm text-gray-600 flex items-center gap-2">
                    <input type="checkbox" className="accent-yellow-500" />
                    This is a gift
                  </label>
                  <button
                    onClick={() => removeFromCart(book.id)}
                    className="text-red-500 hover:text-red-700 text-lg"
                    title="Remove"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="bg-white p-4 rounded-xl shadow mt-6 border border-gray-200 text-right">
            <p className="text-xl font-semibold text-gray-800">
              Subtotal ({cartItems.length} item{cartItems.length > 1 ? "s" : ""}):{" "}
              <span className="text-green-600 font-bold">${total}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">This order contains a gift</p>
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
