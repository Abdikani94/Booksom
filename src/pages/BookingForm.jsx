import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Fade } from "react-awesome-reveal";

const BookingForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    bookId: "",
    bookTitle: "",
    startDate: "",
    endDate: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/bookings", form);
      setSuccess(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        bookId: "",
        bookTitle: "",
        startDate: "",
        endDate: "",
        message: "",
      });
    } catch (error) {
      console.error("Booking Failed", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-24 pb-10 px-4">
        <Fade direction="up" triggerOnce>
          <div className="max-w-2xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md">
            <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
              Book a Book
            </h2>
            {success && (
              <p className="text-green-500 text-center font-medium mb-4">
                ✅ Booking created successfully!
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {[ 
                { name: "fullName", placeholder: "Full Name" },
                { name: "email", placeholder: "Email" },
                { name: "phone", placeholder: "Phone" },
                { name: "bookId", placeholder: "Book ID" },
                { name: "bookTitle", placeholder: "Book Title" },
                { name: "startDate", placeholder: "Start Date", type: "date" },
                { name: "endDate", placeholder: "End Date", type: "date" },
              ].map(({ name, placeholder, type }) => (
                <input
                  key={name}
                  type={type || "text"}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Optional message"
                className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all"
              >
                📘 Book Now
              </button>
            </form>
          </div>
        </Fade>
      </main>

      <Footer />
    </div>
  );
};

export default BookingForm;
