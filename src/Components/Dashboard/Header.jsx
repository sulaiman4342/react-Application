import React from 'react';
import './Header.css';

const Header = () => {
  return (
        <div className="header-contaiiner">
            <div className="top-icons">
                <div className="notification-icon">
                🔔
                </div>
                <div className="profile-icon">
                👤
                </div>
            </div>
            <header className="dashboard-header">
                <div className="header-content">
                    <h1 className="dashboard-title">Dashboard</h1>
                    <nav className="breadcrumb">
                    <span>Dashboard</span> &gt; <span className="breadcrumb-home">Home</span>
                    </nav>
                </div>
                
            </header>
        </div>

  );
};

export default Header;
