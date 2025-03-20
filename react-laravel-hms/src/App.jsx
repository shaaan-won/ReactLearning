import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Mainpage from './pages/HomePage/Mainpage';

const App = () => {
  //This prevents React from logging messages to the console.
  if (process.env.NODE_ENV === "development") {
    console.log = () => {};
    console.warn = () => {};
    console.info = () => {};
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
