// src/LoginPage.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.username.value; // Get name from the input
        const password = e.target.password.value; // Get password from the input

        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, password }), // Send name instead of username
        });

        const data = await response.json();

        if (data.success) {
            navigate("/water-distribution"); // Navigate on successful login
        } else {
            alert(data.message); // Show error message
        }
    };

    return (
        <div className="login-container">
            <nav className="nav-bar">
                <div className="logo-container">
                    <img src="logo.png" alt="SVH Logo" className="logo" />
                    <span className="logo-text">SVH</span>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/login">Login</Link>
                    
                </div>
            </nav>

            <div className="form-container">
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Name:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your name" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />

                    <button type="submit" className="login-btn">LOGIN</button>
                </form>

                <p>New user? <Link to="/signup" className="signup-link">SIGN UP</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;
