import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Hero from '../layout/Hero'
import Testimoniial from '../layout/Testimoniial'
import CompanyWorkWith from '../layout/CompanyWorkWith'
import HomeBlogFeed from '../layout/HomeBlogFeed'

const Home = () => {
  return (
     <>
       <Header />
        <Hero />
        <Testimoniial />
        <CompanyWorkWith />
        <HomeBlogFeed />
       <Footer />
     </>
  )
}

export default Home