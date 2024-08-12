import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';  

const Sidebar = () => (
  <div className="sidebar">
    <h2>Dashboard</h2>
    <ul className="device-list">
      <li><Link to="/add-device">Add Device</Link></li>
      <li><Link to="/report">Report</Link></li>
    </ul>
  </div>
);

export default Sidebar;
