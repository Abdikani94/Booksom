import React,{useState }from 'react'
import { Routes, Route } from 'react-router-dom'
import {  BookDetails, Books,  Logout, PageNotFound,Contact, About, 
  CartPage, BookingForm, Login, Register, 
  AdminBooks,
  Manageusers} from '../../pages/Index'
import AdminDashboard from '../../pages/Addmin/AddminDashboard';
import AdminBookings from '../../pages/AddminBookings';
import AddBook from '../../pages/AddBook';
import EditBook from '../../pages/EditBook';
import AdminMessages from '../../pages/AdminMessage';

 

function Routers() {
  const [auth, setAuth] = useState({ isAuthenticated: false, user:null});
  return (
    <main>
      
        <Routes>
          
          <Route path='/' element={<Books auth={auth}/>}/>
          <Route path='/books' element={<Books/>} />
          <Route path='/books/:id' element={<BookDetails auth={auth}/>} />
           <Route path="/books/booking/:id" element={<BookingForm />} />
            <Route path='/Login' element={<Login setAuth={setAuth} />} />
           <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
          <Route path='/Logout' element={<Logout setAuth={setAuth}/>} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/Register' element={<Register setAuth={setAuth} />} />
           
          <Route path="/cart" element={<CartPage uth={auth}/>} />
         
          { <Route path='/admin-dashboard' element={<AdminDashboard/>} /> }
          <Route path="/admin/books" element={<AdminBooks/>} />
          <Route path="/admin/bookings" element={<AdminBookings/>} /> 
           <Route path="/admin/users" element={<Manageusers/>} />
          <Route path="/admin/add-book" element={<AddBook/>} />
         <Route path="/admin/edit-book/:id" element={<EditBook />} /> 
         <Route path="/admin/Contacts" element={<AdminMessages />} />
        
        </Routes>
      
    </main>
  )
}

export default Routers
