import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardHeader from './Components/DashboardHeader.jsx';
import '../index.css';  

const DashboardPage = () => (
  <div className="container">
    <Sidebar />
    <div className="main-content">
      <DashboardHeader />
      <h2>Devices List</h2>
      {/* Device list content goes here */}
    </div>
  </div>
);

export default DashboardPage;
