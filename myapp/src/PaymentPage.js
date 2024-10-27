import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PaymentPage.css';

const PaymentPage = () => {
    const navigate = useNavigate();

    const handlePaymentResponse = async (response) => {
        // Navigate immediately
        //navigate('/waterdistribution');
       
        // Send the response to ESP32
        try {
            await axios.post('http://192.168.43.201/payment', { response });
            console.log('Response sent');
        } catch (error) {
            console.error('Error sending response to ESP32:', error);
        }
    };

    return (
        <div className="payment-container">
            <h1>Payment Confirmation</h1>
            <p>Are you sure you want to proceed with the payment?</p>
            <button onClick={() => handlePaymentResponse(1)}>Yes</button> {/* 1 for yes */}
            <button onClick={() => handlePaymentResponse(0)}>No</button> {/* 0 for no */}
        </div>
    );
};

export default PaymentPage;