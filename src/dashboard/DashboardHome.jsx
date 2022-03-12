import React from 'react';
import UsersList from '@content/UsersList';
import ProductsList from '@content/ProductsList';

const DashboardHome = () => {
  return (
    <div>
      <div className="panel-header panel-header-sm"></div>
      <div className="content">
        <div className="row">
          <UsersList />
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
