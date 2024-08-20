import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AddDevice from './Pages/AddDevice';
import ManualOperation from './Pages/ManualOperationPage';
import './index.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addDevice" element={<AddDevice />} />
          <Route path="/manualOperation" element={<ManualOperation />} />          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
