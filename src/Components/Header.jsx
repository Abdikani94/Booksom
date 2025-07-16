import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { useCart } from '../Components/Context/CartContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const location = useLocation();
  const { cartItems } = useCart();

  const handleLinkClick = () => setIsOpen(false);

  // Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  const navLinkClass = (path) =>
    location.pathname === path
      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white";

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white shadow-md dark:bg-gray-900 border-b border-gray-300 px-10 transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BookSom
          </span>
        </Link>

        <div className="flex md:order-2 items-center space-x-2">
          <ThemeToggle />
          <button
            type="button"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none 
                       focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h18M1 9h18M1 17h18"
              />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  
                         md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
                         dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" onClick={handleLinkClick} className={navLinkClass('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Books" onClick={handleLinkClick} className={navLinkClass('/Books')}>
                Books
              </Link>
            </li>
            <li className="relative">
              <Link to="/cart" onClick={handleLinkClick} className="text-gray-900 dark:text-white flex items-center gap-1">
                <FaShoppingCart size={24} />
                <span>Cart</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/Login" onClick={handleLinkClick} className={navLinkClass('/Login')}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/Logout" onClick={handleLinkClick} className={navLinkClass('/Logout')}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
