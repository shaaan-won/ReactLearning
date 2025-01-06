import React from "react";

const Header = () => {
  return (
    <>
      <header className="header-section sticky-header d-none d-lg-block">
        <div className="header-wrapper">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                {/* Start Header Logo */}
                <a href="index.html" className="header-logo">
                  <img src="assets/images/logo/logo.png" alt />
                </a>
                {/* End Header Logo */}
              </div>
              <div className="col-auto">
                {/* Start Header Menu */}
                <ul className="header-nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="service-list.html">Service</a>
                    <ul className="submenu">
                      <li>
                        <a href="service-list.html">Services</a>
                      </li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="blog-list.html">Blog</a>
                    <ul className="submenu">
                      <li>
                        <a href="blog-list.html">Blog List Full Width</a>
                      </li>
                      <li>
                        <a href="blog-list-sidebar-left.html">
                          Blog List Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-list-sidebar-right.html">
                          Blog List Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details Full Width</a>
                      </li>
                      <li>
                        <a href="blog-details-sidebar-left.html">
                          Blog Details Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-details-sidebar-right.html">
                          Blog Details Right Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Pages</a>
                    <ul className="submenu">
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="project-list.html">Project</a>
                      </li>
                      <li>
                        <a href="project-details.html">Project Details</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="404-page.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
                {/* End Header Menu */}
              </div>
              <div className="col">
                <div className="header-btn-link text-end">
                  <a
                    href="contact.html"
                    className="btn btn-sm btn-outline-one icon-space-left"
                  >
                    Hire Me <i className="icofont-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header d-block d-lg-none">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col">
              <div className="mobile-logo">
                <a href="index.html">
                  <img src="assets/images/logo/logo.png" alt />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="mobile-action-link text-end">
                <a
                  href="#mobile-menu-offcanvas"
                  className="offcanvas-toggle offside-menu"
                >
                  <i className="icofont-navigation-menu" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu-offcanvas"
        className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section"
      >
        {/* Start Offcanvas Header */}
        <div className="offcanvas-header text-end">
          <button className="offcanvas-close">
            <i className="icofont-close-line" />
          </button>
        </div>{" "}
        {/* End Offcanvas Header */}
        {/* Start Offcanvas Mobile Menu Wrapper */}
        <div className="offcanvas-mobile-menu-wrapper">
          {/* Start Mobile Menu  */}
          <div className="mobile-menu-bottom">
            {/* Start Mobile Menu Nav */}
            <div className="offcanvas-menu">
              <ul>
                <li>
                  <a href="index.html">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Services</span>
                  </a>
                  <ul className="mobile-sub-menu">
                    <li>
                      <a href="service-list.html">Service List</a>
                    </li>
                    <li>
                      <a href="service-details.html">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span>Blog</span>
                  </a>
                  <ul className="mobile-sub-menu">
                    <li>
                      <a href="blog-list.html">Blog List Full Width</a>
                    </li>
                    <li>
                      <a href="blog-list-sidebar-left.html">
                        Blog List Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-list-sidebar-right.html">
                        Blog List Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details Full Width</a>
                    </li>
                    <li>
                      <a href="blog-details-sidebar-left.html">
                        Blog Details Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-details-sidebar-right.html">
                        Blog Details Right Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span>Pages</span>
                  </a>
                  <ul className="mobile-sub-menu">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="project-list.html">Project</a>
                    </li>
                    <li>
                      <a href="project-details.html">Project Details</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li>
                      <a href="404-page.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* End Mobile Menu Nav */}
          </div>{" "}
          {/* End Mobile Menu */}
          {/* Start Mobile contact Info */}
          <div className="mobile-contact-info text-center">
            <ul className="social-link">
              <li>
                <a target="_blank" href="https://example.com">
                  <i className="icofont-facebook" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://example.com">
                  <i className="icofont-twitter" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://example.com">
                  <i className="icofont-skype" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Mobile contact Info */}
        </div>{" "}
        {/* End Offcanvas Mobile Menu Wrapper */}
      </div>
      <div className="offcanvas-overlay" />
    </>
  );
};

export default Header;
