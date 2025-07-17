import React,{useState }from 'react'
import { Routes, Route } from 'react-router-dom'
import {  BookDetails, Books,  Logout, PageNotFound,Contact, About, 
  CartPage, BookingForm, Login, Register } from '../../pages/Index'
  
 

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
         
          {/* <Route path='/AddminDashboard' element={<AddminDashboard/>} /> */}
          {/* <Route path="/admin/books" element={<AdminBooks/>} />
          <Route path="/admin/bookings" element={<AdminBookings/>} /> */}
           {/* <Route path="/admin/users" element={<ManageUsers/>} /> */}
          {/* <Route path="/admin/add-book" element={<AddBook />} /> */}
          {/* <Route path="/admin/edit-book/:id" element={<EditBook />} />  */}
        
        </Routes>
      
    </main>
  )
}

export default Routers
