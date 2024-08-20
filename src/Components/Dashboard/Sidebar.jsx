import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="menu-icon"></div>
        <span>Dashboard</span>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <span className="menu-icon-diamond"></span>
          <span>Add Device</span>
        </li>
        <li className="menu-item">
          <span className="menu-icon-diamond"></span>
          <span>Report</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
