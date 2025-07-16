import React, { useEffect } from "react";
import { FaBookOpen, FaGlobe, FaUsers } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, []);

  return (
    <div className="pt-[120px] pb-[120px] min-h-screen bg-gray-100 dark:bg-[#0c0f1f] px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
            About <span className="text-red-500">Booksom</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover stories, unlock imagination, and embrace knowledge — all in one place.
          </p>
        </div>

        {/* Image Section */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1350&q=80"
            alt="Books"
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow border-l-4 border-red-500">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-gray-800 dark:text-white">
              <FaBookOpen className="text-red-500" /> Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To empower every reader by delivering affordable, high-quality books from all genres.
              Whether you seek inspiration, education, or entertainment — Booksom is your trusted companion.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow border-l-4 border-indigo-500">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-gray-800 dark:text-white">
              <FaGlobe className="text-indigo-500" /> Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To become the world’s leading online bookstore where stories know no boundaries and knowledge is limitless.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Why Choose Booksom?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We blend technology, design, and love for books to give readers a seamless, joyful, and inspiring journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition text-center">
              <FaBookOpen className="text-3xl text-red-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Curated Collections</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Handpicked books for every reader — from timeless classics to fresh new titles.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition text-center">
              <FaUsers className="text-3xl text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Reader-Friendly Experience</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Seamless browsing, smart search, and smooth checkout to keep you reading without delay.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition text-center">
              <FaGlobe className="text-3xl text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">Global Access</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Serving readers from around the world with passion and purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
