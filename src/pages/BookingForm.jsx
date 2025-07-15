import React, { useState } from 'react';

function BookingForm({ bookTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bookTitle: bookTitle || '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill all the fields');
      return;
    }

    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const updatedBookings = [...existingBookings, formData];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    setSuccessMessage('✅ Booking Successful! We will contact you soon.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      bookTitle: bookTitle || '',
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-8 bg-gradient-to-br from-gray-100 via-purple-100 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/60 dark:bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/30 transition-all">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 dark:text-purple-300 mb-6">
          📚 Booking: {bookTitle}
        </h2>

        {successMessage && (
          <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg mb-6 text-center font-medium shadow-md">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-purple-300 dark:bg-white/10 dark:text-white shadow-sm transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-purple-300 dark:bg-white/10 dark:text-white shadow-sm transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-purple-300 dark:bg-white/10 dark:text-white shadow-sm transition"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800 dark:text-gray-200">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-purple-300 dark:bg-white/10 dark:text-white shadow-sm transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            🚀 Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
