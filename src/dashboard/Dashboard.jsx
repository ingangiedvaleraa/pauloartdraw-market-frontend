import React from 'react';
import Sidebar from '@partials/Sidebar';
import Navbar from '@partials/Navbar';
import FooterDash from '@partials/FooterDash';
import UsersList from '@content/UsersList';
import ProductsList from '@content/ProductsList';
import '@styles/now-ui-dashboard.scss';

const Dashboard = ({children}) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel" id="main-panel">
        <Navbar />
        {children}
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
