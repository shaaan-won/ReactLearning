import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/'  element={ <Home/>} />
      <Route path='/home'  element={ <Home/>} />
      <Route path='/about'  element={ <About/>} />
      <Route path='/contact'  element={ <Contact/>} />
      <Route path='*'  element={ <PageNotFound/>} />

    </Routes>
    </BrowserRouter>

    

   </>
  )
}

export default App
