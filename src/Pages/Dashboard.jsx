import React from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import Header from '../Components/Dashboard/Header';
import DeviceStatus from '../Components/Dashboard/DeviceStatus';
import './Dashboard.css';
import Footer from '../Components/Footer';

const Dashboard = () => {
    return(
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <DeviceStatus />
            </div>
            <Footer />
        </div>
        
    );
};

export default Dashboard;