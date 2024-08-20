import React from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import Header from '../Components/Dashboard/Header';
import './AddDevice.css';
import Footer from '../Components/Footer';
import AddDeviceFormComponent from '../Components/AddDeviceForm';

const AddDevice = () => {
    return(
        <div className="addDevice-container">
            <Sidebar />
            <div className="main-content">
                <div className="header-contaiiner">
                    <div className="top-icons">
                        <div className="notification-icon">
                        🔔
                        </div>
                        <div className="profile-icon">
                        👤
                        </div>
                    </div>
                </div>    
                <AddDeviceFormComponent />
            </div>
            <Footer />
        </div>        
    );
};

export default AddDevice;