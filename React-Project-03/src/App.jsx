import React from 'react'
import MainLayout from './layout/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Booking from './pages/HotelBooking/Booking'
import RoomList from './pages/RoomDetails/RoomList'
import Page404 from './pages/Page404'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Login Page</h1>} />

          <Route element={<MainLayout />}>
            <Route path='/home' element={<Dashboard />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/rooms' element={<RoomList />} />
          </Route>

          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App