import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaffManage from './pages/Staff/staff/StaffManage';
import StaffCreate from './pages/Staff/staff/StaffCreate';
import StaffShow from './pages/Staff/staff/StaffShow';
import StaffUpdate from './pages/Staff/staff/StaffUpdate';
import Login from './Login/Login';


import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <>
     <ToastContainer />
     <BrowserRouter>
      <Routes>
        <Route path='/'  element={ <Login/>} />
        <Route path='/StaffManage'  element={ <StaffManage/>} />
        <Route path='/StaffCreate'  element={ <StaffCreate/>} />
        <Route path='/show/:id'  element={ <StaffShow/>} />
        <Route path='/update/:id'  element={ <StaffUpdate/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App