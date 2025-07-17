import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">About Booksom</h3>
          <p className="text-sm leading-relaxed">
            Discover a wide collection of books, from bestsellers to timeless classics. We bring knowledge and stories to your fingertips.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/books" className="hover:text-yellow-400 transition">Books</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="/Contact" className="hover:text-yellow-400 transition">Contact</a></li>
            <li><a href="/cart" className="hover:text-yellow-400 transition">Cart</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-sm mb-2"> Booksom HQ<br />
              123 Knowledge Street,<br />
              Booktown, BK 00100</p>
          <p className="text-sm mb-2">Email: Booksom@gmail.com</p>
          <p className="text-sm mb-2">Phone: +252 612 432 994</p>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-yellow-400 transition text-lg">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-yellow-400 transition text-lg">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-yellow-400 transition text-lg">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-yellow-400 transition text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} BookStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
