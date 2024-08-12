import React from 'react';
import Login from './Components/Login';  
import Footer from './Components/Footer';
import DashboardPage from './pages/DashboardPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer /> {/* Add Footer at the bottom */}
      </div>
  </Router>
  );
}

export default App;
