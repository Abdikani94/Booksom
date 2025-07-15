import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddminDashboard, BookDetails, Books, Carts, Logout, PageNotFound,} from '../pages/Index'
import Register from '../pages/Register'
import Login from '../pages/Login'
import AddBook from '../pages/AddBook'
import EditBook from '../pages/EditBook'
import { AuthProvider } from "../Components/AuthContext/AuthContext";
import View from '../pages/Addmin/View'
import BookingForm from '../pages/BookingForm'
import AdminBookings from '../pages/Addmin/AddminBookings'
import AdminBooks from '../pages/AddminBooks'
import Home from '../pages/Home'
import CartPage from '../pages/Cart'
import ManageUsers from '../pages/ManageUsers'
import About from '../pages/About'
import Contact from '../pages/Contact'



function Routers() {
  return (
    <main>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='/Home' element={<Books/>}/>
          <Route path='/books' element={<Books/>} />
          <Route path='/books/:id' element={<BookDetails />} />
           <Route path="/books/booking/:id" element={<BookingForm />} />
          <Route
            path="/add"
            element={<AddBook/>   }
          />
          <Route path='/AddminDashboard' element={<AddminDashboard/>} />
          <Route path="/admin/books" element={<AdminBooks/>} />
          <Route path="/admin/bookings" element={<AdminBookings/>} />
           <Route path="/admin/users" element={<ManageUsers/>} />
          <Route path='/Register' element={<Register />} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/admin/add-book" element={<AddBook />} />
          <Route path="/admin/edit-book/:id" element={<EditBook />} /> 
          <Route path='/Login' element={<Login />} />
           <Route path='/About' element={<About />} />
              <Route path='/Contact' element={<Contact />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </main>
  )
}

export default Routers
