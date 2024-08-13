import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header className="dashboard-header">
            {/* <div className="header-actions">
                <div className="header-icon">🔔</div>
                <div className="header-icon">👤</div>
            </div> */}
            <div className="header-content">
                <h1 className="dashboard-title">Dashboard</h1>
                <nav className="breadcrumb">
                    <span>Dashboard</span> &gt; <span className="breadcrumb-home">Home</span>
                </nav>
            </div>
        </header>
    );
};

export default Header;