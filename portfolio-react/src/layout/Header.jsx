import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
   
   <header id="header" className="header d-flex align-items-center light-background sticky-top">
    <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
      
      {/* <img src="assets/img/logo.png" alt=""/>  */}
        <h1 className="sitename">Kelly</h1>
      </a>

      
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><NavLink   to="/"> Home </NavLink></li>
          <li> <NavLink to="/about">About</NavLink></li>
          <li><a href="/">Homew</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li className="dropdown"><a href="#"><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Services</a></li>
              <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div className="header-social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
   
   </>
  )
}

export default Header