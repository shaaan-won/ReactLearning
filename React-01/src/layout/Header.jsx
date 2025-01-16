import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container">
            <Link className="navbar-brand" to="/Login">
              Staff Management
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/StaffManage"
                  >
                    VIEW
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/StaffCreate">
                    Add Staff
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/work-schedule">
                    Work Schedule
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Performance Score
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/action1">
                        Action 1
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/action2">
                        Action 2
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/action3">
                        Another Action
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
