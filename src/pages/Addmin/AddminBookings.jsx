import React from 'react';

function AdminBookings() {
  const bookings = [
    {
      id: 1,
      name: 'Mohamed Ali',
      email: 'mohamed53@gmail.com',
      phone: '612345678',
      address: 'Mogadishu',
      bookTitle: 'Atomic Habits',
    },
    {
      id: 2,
      name: 'Aisha Ahmed',
      email: 'aisha@gmail.com',
      phone: '612876543',
      address: 'Hargeisa',
      bookTitle: 'Rich Dad Poor Dad',
    },
     {
      id: 3,
      name: 'Khalid Geedi',
      email: 'Khalid213@gmail.com',
      phone: '619282737',
      address: 'Hargeisa',
      bookTitle: 'Rich Dad Poor Dad',
    },
     {
      id: 4,
      name: 'Farah Gedi',
      email: 'farah123@gmail.com',
      phone: '617236373',
      address: 'Bosasa',
      bookTitle: 'Rich Dad Poor Dad',
    },
   
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - All Bookings</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-purple-700 text-white">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Phone</th>
            <th className="p-3 border">Address</th>
            <th className="p-3 border">Book Title</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="text-center">
              <td className="p-2 border">{booking.id}</td>
              <td className="p-2 border">{booking.name}</td>
              <td className="p-2 border">{booking.email}</td>
              <td className="p-2 border">{booking.phone}</td>
              <td className="p-2 border">{booking.address}</td>
              <td className="p-2 border">{booking.bookTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminBookings;
