import { useEffect, useState } from 'react';

const useTokenAuth = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const rolString = sessionStorage.getItem('rol');
    const userToken = JSON.parse(tokenString);
    const userRol = JSON.parse(rolString);
    const logged = userToken ? true : false;
    return { tokenInfo: userToken, loggedInfo: logged, rolInfo: userRol };
  };

  const [token, setToken] = useState(getToken().tokenInfo);
  const [loggedIn, setLoggedId] = useState(getToken().loggedInfo);
  const [rol, setRol] = useState(getToken().rolInfo);

  const saveToken = (userToken, userRol) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    sessionStorage.setItem('rol', JSON.stringify(userRol));
    setToken(userToken);
    setRol(userRol);
    setLoggedId(true);
  };

  const logout = () => {
    console.log('logout');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('rol');
    setToken();
    setLoggedId(false);
    setRol();
  };

  return {
    rol,
    setToken: saveToken,
    token,
    loggedIn,
    logout,
  };
};

export default useTokenAuth;
