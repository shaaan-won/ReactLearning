import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Mainpage from './pages/HomePage/Mainpage';

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
