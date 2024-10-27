// src/HomePage.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
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

            <header className="header">
                <h1 id="newid">Welcome to SVH Water Management</h1>
                
            </header>
            
            <section className="services">
                <h2>Our Services</h2>
                
                <ul>
                    <li><strong>Water Supply Management</strong>: Control and monitor your daily water usage with ease.</li>
                    <li><strong>Automated Payment System</strong>: Secure, easy, and fast payment options right from your account.</li>
                    <li><strong>24/7 Support</strong>: Dedicated support team ready to help anytime you need assistance.</li>
                </ul>
            </section>

            <section className="benefits">
                <h2>Why Choose SVH?</h2>
                <p>SVH Water Management provides industry-leading solutions with these benefits:</p>
                <ul>
                    <li><strong>Reliable Supply:</strong> Assured daily access to clean water.</li>
                    <li><strong>Efficient Billing:</strong> Transparent billing with detailed usage reports.</li>
                    <li><strong>Eco-Friendly Initiatives:</strong> We prioritize sustainable water management practices.</li>
                </ul>
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <p>"SVH has transformed how we manage our water supply. It's reliable and hassle-free!" - <em>J. Doe</em></p>
                <p>"Their support team is fantastic and always ready to help. Highly recommend SVH!" - <em>A. Smith</em></p>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} SVH Water Management. All rights reserved.</p>
                <p>Follow us on <a href="#Facebook">Facebook</a>, <a href="#Twitter">Twitter</a>, and <a href="#LinkedIn">LinkedIn</a></p>
            </footer>
        </div>
    );
};

export default HomePage;
