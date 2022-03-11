import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import NewPassword from '@pages/NewPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import SendEmail from '@pages/SendEmail';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import CheckoutPayment from '@pages/CheckoutPayment';
import CheckoutSuccess from '@pages/CheckoutSuccess';
import Dashboard from '@dashboard/Dashboard';
import DashboardHome from '@dashboard/DashboardHome';
import SaveProduct from '@content/SaveProduct';
import Orders from '@pages/Orders';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';
import useTokenAuth from '@hooks/useTokenAuth';

const App = () => {
  const { setToken, loggedIn, rol } = useTokenAuth();
  const initialState = useInitialState();

  if (!loggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login setToken={setToken} />} />
          <Route
            exact
            path="/signup"
            element={<CreateAccount setToken={setToken} />}
          />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route exact path="/send-email" element={<SendEmail />} />
          <Route path="*" element={<Login setToken={setToken} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  if (rol == '[ADMIN]') {
    return (
      <BrowserRouter>
        <Dashboard>
          <Routes>
            <Route exact path="/" element={<DashboardHome />} />
            <Route exact path="/edit-product" element={<SaveProduct />} />
          </Routes>
        </Dashboard>
      </BrowserRouter>
    );
  }

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/signup" element={<Navigate to="/" />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/checkout/payment"
              element={<CheckoutPayment />}
            />
            <Route
              exact
              path="/checkout/success"
              element={<CheckoutSuccess />}
            />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
