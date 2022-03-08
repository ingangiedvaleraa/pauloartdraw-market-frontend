import React from 'react';
import Sidebar from '@partials/Sidebar';
import Navbar from '@partials/Navbar';
import FooterDash from '@partials/FooterDash';
import '@styles/now-ui-dashboard.scss';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel" id="main-panel">
        <Navbar />
        <div className="panel-header panel-header-lg"></div>
        <div className="content">
          <h1>Dashboard</h1>
        </div>
        <FooterDash />
      </div>
      <script src="@styles/js/core/jquery.min.js"></script>
      <script src="@styles/js/core/popper.min.js"></script>
      <script src="@styles/js/core/bootstrap.min.js"></script>
      <script src="@styles/js/plugins/perfect-scrollbar.jquery.min.js"></script>
    </div>
  );
};

export default Dashboard;
