// src/AboutUsPage.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './AboutusPage.css';
const AboutUsPage = () => {
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

            <header>
                <h1>About Us</h1>
                <p>Dedicated to delivering sustainable and reliable water solutions for a healthier community.</p>
            </header>

            <section className="our-mission">
                <h2>Our Mission</h2>
                <p>At SVH Water Management, our mission is to guarantee consistent access to clean water while promoting sustainability and innovation in water management. We strive to improve the quality of life by ensuring the safe delivery of water resources through eco-conscious and efficient practices.</p>
            </section>

            <section className="our-values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Innovation:</strong> We leverage modern technology to create efficient water management solutions.</li>
                    <li><strong>Transparency:</strong> Our services are built on clear, honest communication with our customers.</li>
                    <li><strong>Customer-Centric:</strong> Meeting customer needs is at the heart of everything we do.</li>
                    <li><strong>Environmental Responsibility:</strong> We are committed to sustainable practices that protect the planet.</li>
                </ul>
            </section>

            <section className="our-team">
                <h2>Meet Our Team</h2>
                <p>Our team is made up of dedicated water management experts, engineers, and customer service professionals who work tirelessly to ensure quality service. Each member of the SVH family brings unique skills to meet our mission of serving our community with excellence.</p>
            </section>

            <section className="community-commitment">
                <h2>Commitment to the Community</h2>
                <p>SVH Water Management believes in giving back to the community. Through various outreach programs, we focus on educating the public about water conservation and supporting initiatives that promote sustainable water usage.</p>
            </section>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} SVH Water Management. All rights reserved.</p>
                <p>Connect with us on <a href="#Facebook">Facebook</a>, <a href="#Twitter">Twitter</a>, and <a href="#LinkedIn">LinkedIn</a></p>
            </footer>
        </div>
    );
};

export default AboutUsPage;
