import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/CheckoutSuccess.scss';

const CheckoutSuccess = () => {
  return (
    <div className="CheckoutSuccess">
      <div className="CheckoutSuccess-container">
        <h1 className="title">My order</h1>
        <div className="CheckoutSuccess-content">
          <div className="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem />
      </div>
    </div>
  );
};

export default CheckoutSuccess;
