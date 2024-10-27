import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"; 
import axios from 'axios';
import './SignUpPage.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        password: '' // New password field
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear the error for the current field
    };

    const validateForm = () => {
        const newErrors = {};
        const phoneRegex = /^[0-9]{10}$/; // Basic phone number validation (10 digits)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// At least 8 characters, 1 letter, 1 number

        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.address) {
            newErrors.address = 'Address is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters long and contain at least 1 letter and 1 number';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return; // Stop the submission if there are errors
        }

        // Make the POST request to the backend server
        axios.post('http://localhost:5000/signup', formData)
            .then(response => {
                alert('User registered successfully');
                console.log(response.data);
                // Reset the form after successful registration
                setFormData({ name: '', phone: '', email: '', address: '', password: '' });
            })
            .catch(error => {
                console.error('Error registering user:', error);
            });
    };

    return (
        <div className="signup-container">
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

            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}

                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}

                <label htmlFor="address">Address:</label>
                <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignUpPage;
