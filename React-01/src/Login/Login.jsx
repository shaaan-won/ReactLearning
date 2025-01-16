import React, { useState } from 'react';
// import '../assets/css/Login.css'; // Custom CSS for styling
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import axios from 'axios';
import { useNavigation } from 'react-router-dom';

const Login = () => {
    // const navigate = useNavigation();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios
            .post('http://localhost/Project_PHP/Final_hotel_project/admin/api/auth/login', formData)
            .then((res) => {
                console.log(res.data.token);
                localStorage.setItem('token', res.data.token);
                // navigate.push('/StaffManage');
            })
            .catch((err) => {
                console.log(err);
            });
        
    };


    return (
        <>
            <Header />

            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="card shadow-lg" style={{ width: '100%', maxWidth: 400 }}>
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">username address</label>
                                <input type="username" name='username' onChange={handleChange} className="form-control" id="email" placeholder="Enter your username" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name='password' onChange={handleChange} className="form-control" id="password" placeholder="Enter your password" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Login</button>
                            <div className="d-flex justify-content-between mt-3">
                                <a href="#" className="small">Forgot Password?</a>
                                <a href="#" className="small">Create an Account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default Login;