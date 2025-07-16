import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, []);

  return (
    <div className="pt-[120px] pb-[120px] min-h-screen bg-gray-100 dark:bg-[#0c0f1f] text-gray-800 dark:text-white px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Contact <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1c2237] p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
            <form className="space-y-6">
              <div>
                <label className="block mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your Subject"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-[#1c2237] p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-yellow-500 mt-1" />
              <p>
                Booksom HQ<br />
                123 Knowledge Street,<br />
                Booktown, BK 00100
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-yellow-500" />
              <a href="mailto:booksom@gmail.com" className="hover:underline">
                booksom@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-yellow-500" />
              <a href="tel:+252612432994" className="hover:underline">
                +252 612-432-994
              </a>
            </div>

            <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Business Hours</h3>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
