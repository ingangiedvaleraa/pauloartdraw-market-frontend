import React, { useState, useRef, useEffect } from 'react';
import useRegister from '@hooks/useRegister';
import '@styles/CreateAccount.scss';
import Loading from '@components/Loading';
import PropTypes from 'prop-types';

const CreateAccount = ({ setToken }) => {
  const form = useRef(null);

  const [loginData, setLoginData] = useState();
  const [loading, setLoading] = useState(false);
  const result = useRegister(loginData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      id: formData.get('id'),
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      email: formData.get('email'),
      password: formData.get('password'),
      rolId: 2,
    };
    if (data.email != '' && data.password != '') {
      setLoginData(data);
    }
    setLoading(result.isLoading);
  };

  useEffect(() => {
    setLoading(result.isLoading);
    console.log(result.rol);
    result.token ? setToken(result.token, result.rol) : console.log('nada');
  }, [result.isLoading, result.token]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="CreateAccount">
        <div className="CreateAccount-container">
          <h1 className="title">My account</h1>
          <form action="/" className="form" ref={form}>
            <div>
              <label for="id" className="label">
                Número de Identificación
              </label>
              <input
                type="text"
                name="id"
                placeholder="111111"
                className="input input-name"
              />
              <label for="firstname" className="label">
                Nombre
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Teff"
                className="input input-name"
              />
              <label for="lastname" className="label">
                Apellido
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Apellido"
                className="input input-name"
              />
              <label for="email" className="label">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="platzi@example.com"
                className="input input-email"
              />
              <label for="password" className="label">
                Clave
              </label>
              <input
                type="password"
                name="password"
                placeholder="*********"
                className="input input-password"
              />
            </div>
            <button
              className="primary-button login-button"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
};

CreateAccount.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default CreateAccount;
