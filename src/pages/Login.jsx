import React, { useEffect, useRef, useState } from 'react';
import useLogin from '@hooks/useLogin';
import '@styles/Login.scss';
import Loading from '@components/Loading';
import PropTypes from 'prop-types';

import logoYardSale from '@logos/logo_yard_sale.png';

const Login = ({ setToken }) => {
  const [loginData, setLoginData] = useState();
  const [loading, setLoading] = useState(false);
  const result = useLogin(loginData);

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    if (data.email != '' && data.password != '') {
      setLoginData(data);
    }
    setLoading(result.isLoading);
  };

  useEffect(() => {
    setLoading(result.isLoading);
    result.tokenLogin
      ? setToken(result.tokenLogin, result.rolLogin)
      : console.log('nada');
  }, [result.tokenLogin, result.rolLogin, result.isLoading]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="Login">
        <div className="Login-container">
          <img src={logoYardSale} alt="logo" className="logo" />
          <form action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="platzi@example.com"
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />
            <button
              className="primary-button login-button"
              onClick={handleSubmit}
            >
              Log in
            </button>
            <a href="/recovery-password">Forgot my password</a>
          </form>
          <a href="/signup">
            <button className="secondary-button signup-button">Sign up</button>
          </a>
        </div>
      </div>
    );
  }
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
