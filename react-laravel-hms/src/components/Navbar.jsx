import React from 'react'

const Navbar = () => {
  return (
    <nav className="tm-primary-nav tm-onepage-nav">
      <ul className="tm-primary-nav-list">
        <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent">
          <a href="#home" className="nav-link tm-smooth-move">
            HOME
          </a>
          <ul>
            <li className="menu-item current-menu-item">
              <a href="index.html">Home1 (Default Version)</a>
            </li>
            <li className="menu-item">
              <a href="home-version-2.html">Home2 (Animation Version)</a>
            </li>
            <li className="menu-item">
              <a href="home-version-3.html">Home3 (Full Width Banner)</a>
            </li>
            <li className="menu-item">
              <a href="home-version-4.html">Home4 (Ripple Version)</a>
            </li>
            <li className="menu-item">
              <a href="home-version-5.html">Home5 (Parallax Version)</a>
            </li>
            <li className="menu-item">
              <a href="home-version-6.html">Home6 (Slider Version)</a>
            </li>
            <li className="menu-item">
              <a href="home-version-7.html">Home7 (Youtube Background)</a>
            </li>
            <li className="menu-item">
              <a href="home-version-8.html">Home8 (Minimal Version)</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#about" className="nav-link tm-smooth-move">
            ABOUT
          </a>
        </li>
        <li className="menu-item">
          <a href="#department" className="nav-link tm-smooth-move">
            DEPARTMENT
          </a>
        </li>
        <li className="menu-item">
          <a href="#doctor" className="nav-link tm-smooth-move">
            DOCTOR
          </a>
        </li>
        <li className="menu-item">
          <a href="#gallery" className="nav-link tm-smooth-move">
            GALLERY
          </a>
        </li>
        <li className="menu-item">
          <a href="#price" className="nav-link tm-smooth-move">
            PRICE
          </a>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#blog" className="nav-link tm-smooth-move">
            BLOG
          </a>
          <ul>
            <li className="menu-item">
              <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
            </li>
            <li className="menu-item">
              <a href="blog-full-width.html">Blog Full Width</a>
            </li>
            <li className="menu-item">
              <a href="blog-details-right-sidebar.html">
                Single Blog Image Post
              </a>
            </li>
            <li className="menu-item">
              <a href="blog-details-left-sidebar.html">
                Single Blog Slider Post
              </a>
            </li>
            <li className="menu-item">
              <a href="blog-details-full-width.html">Single Blog Video Post</a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="#contact" className="nav-link tm-smooth-move">
            CONTACT
          </a>
        </li>
        <li className="menu-item">
          <a href="#appointment" className="nav-link tm-smooth-move">
            APPOINTMENT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar