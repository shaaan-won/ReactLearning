import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="bg-primary text-white py-3 mb-4">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="h3 mb-0">Customer Management</h1>
                    <nav>
                        <ul className="nav">
                            {/* <li className="nav-item">
                                <Link className="nav-link text-white" to="/">Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to= "/CreateCustomer">Add Customer</Link>
                            </li> */}
                            <li>
                                <NavLink className="nav-link text-white" to="/">Customers</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link text-white" to="/CreateCustomer">Add Customer</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Logout</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Settings</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header