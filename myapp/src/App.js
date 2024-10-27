// src/App.js
//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WaterDistribution from "./components/WaterDistribution";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage";
import PaymentPage from './PaymentPage';



function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/about-us" element={<AboutUsPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/water-distribution" element={<WaterDistribution />} />
    <Route path="/payment" element={<PaymentPage/>}/>
      
    </Routes>
  </Router>
  );
}

export default App;
