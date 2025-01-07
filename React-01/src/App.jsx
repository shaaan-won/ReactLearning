import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './layout/Header'
import Footer from './layout/Footer'
import MngForm from './components/MngForm';
import CreateForm from './components/CreateForm';

const App = () => {
  return (
    <>
     <Header />
        <CreateForm />
        <MngForm />
     <Footer />
    </>
  )
}

export default App