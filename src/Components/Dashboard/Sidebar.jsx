import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-item active">Dashboard</div>
      <div className="menu-item">Add Device</div>
      <div className="menu-item">Report</div>
    </div>
  );
};

export default Sidebar;
