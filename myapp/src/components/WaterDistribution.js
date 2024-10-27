import React, { useEffect, useState } from "react";
import './WaterDistribution.css';

const generateRandomParameters = () => {
    const dailyDistribution = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Random between 10 and 20 Litres
    const daysDistributed = Math.floor(Math.random() * (31 - 25 + 1)) + 25; // Random between 25 and 31 days
    const monthlyDistribution = dailyDistribution * daysDistributed; // Calculate based on daily distribution

    return {
        dailyDistribution: `${dailyDistribution} Litres`,
        monthlyDistribution: `${monthlyDistribution} Litres`,
        daysDistributed,
    };
};

const WaterDistribution = () => {
    const [waterData, setWaterData] = useState({});
    const [randomParams, setRandomParams] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/water-distribution');
                const data = await response.json();
                setWaterData(data);
                setRandomParams(generateRandomParameters()); // Generate additional parameters
            } catch (error) {
                console.error('Error fetching water data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="water-distribution">
            <header className="header">
                <img src="logo.png" alt="Logo" className="logo" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/login">Login</a>
                    <a href="/payment">Payment</a>
                </nav>
            </header>
            
            <div className="content" style={{ backgroundImage: "url('../public/background.png')" }}>
                <div className="water-details">
                    <h2>WATER USAGE DETAILS</h2>
                    <ul>
                        <li><strong>Flow Rate:</strong> {waterData.flowRate || "Loading..."} L/min</li>
                        <li><strong>Total Flow:</strong> {waterData.totalFlow || "Loading..."} L</li>
                        <li><strong>Water Distributed Per Day:</strong> {randomParams.dailyDistribution}</li>
                        <li><strong>Water Distributed Per Month:</strong> {randomParams.monthlyDistribution}</li>
                        <li><strong>Number of Days Distributed:</strong> {randomParams.daysDistributed} Days</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WaterDistribution;
