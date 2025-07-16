import React, { useState, useEffect } from 'react';

function BookingForm({ bookTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bookTitle: bookTitle || '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0); // ✅ Scroll to top on mount
  }, []);

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ece9e6] to-[#ffffff] dark:from-gray-900 dark:to-gray-800 px-4 pt-24">
      <div className="w-full max-w-lg bg-white/30 dark:bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20 transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-300 mb-6">
          📚 Book: {bookTitle}
        </h2>

        {successMessage && (
          <div className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 px-4 py-3 rounded-lg mb-6 text-center font-medium shadow">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Your full name' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com' },
            { label: 'Phone', name: 'phone', type: 'text', placeholder: 'Your phone number' },
            { label: 'Address', name: 'address', type: 'text', placeholder: 'Your address' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-300 dark:bg-white/10 dark:text-white shadow-sm transition duration-200 outline-none"
              />
            </div>
          ))}

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
