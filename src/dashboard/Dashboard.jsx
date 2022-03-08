import React from 'react';
import Sidebar from '@partials/Sidebar';
import Navbar from '@partials/Navbar';
import FooterDash from '@partials/FooterDash';
import '@styles/now-ui-dashboard.scss';

const Dashboard = () => {
    return (
        <div className="">
          <Sidebar />
          <Navbar />
           <h1>Dashboard</h1> 
           <FooterDash />
        </div>
    );
};

export default Dashboard;