import React from 'react';
import Sidebar from '../Components/Dashboard/Sidebar';
import Header from '../Components/Dashboard/Header';
import ManualOperationForm from '../Components/ManualOperationForm';
import './ManualOperationPage.css';
import Footer from '../Components/Footer';

const ManualOperation = () => {
    return(
        <div className="manual-operation-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <ManualOperationForm />
            </div>
            <Footer />
        </div>
        
    );
};

export default ManualOperation;