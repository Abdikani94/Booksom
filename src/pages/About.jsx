import React from "react";
import { FaBookOpen, FaGlobe, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-28 px-6 max-w-6xl mx-auto min-h-screen text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          About <span className="text-yellow-500">Booksom</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover stories, unlock imagination, and embrace knowledge — all in one place.
        </p>
      </div>

      {/* Image section */}
      <div className="mb-12">
        <img
          src="https://images.unsplash.com/photo-1553729459-efe14ef6055d"
          alt="Booksom Library"
          className="rounded-3xl w-full object-cover h-80 shadow-lg"
        />
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white p-8 rounded-xl shadow border-l-4 border-yellow-400">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <FaBookOpen className="text-yellow-500" /> Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To empower every reader by delivering affordable, high-quality books from all genres.
            Whether you seek inspiration, education, or entertainment — Booksom is your trusted companion.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow border-l-4 border-indigo-500">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <FaGlobe className="text-indigo-500" /> Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To become the world’s leading online bookstore where stories know no boundaries and knowledge is limitless.
          </p>
        </div>
      </div>

      {/* Why Choose Booksom */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Why Choose Booksom?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We blend technology, design, and love for books to give readers a seamless, joyful, and inspiring journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaBookOpen className="text-3xl text-yellow-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg">Curated Collections</h3>
          <p className="text-sm text-gray-600">
            Handpicked books for every reader — from timeless classics to fresh new titles.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaUsers className="text-3xl text-blue-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg">Reader-Friendly Experience</h3>
          <p className="text-sm text-gray-600">
            Seamless browsing, smart search, and smooth checkout to keep you reading without delay.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaGlobe className="text-3xl text-green-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg">Global Access</h3>
          <p className="text-sm text-gray-600">
            Serving readers from around the world with passion and purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
