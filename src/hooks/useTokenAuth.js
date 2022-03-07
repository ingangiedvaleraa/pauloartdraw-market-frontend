import { useState } from 'react';


const useTokenAuth = () => {

  const [rol, setRol] = useState();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        const logged = userToken ? true : false;
        return {tokenInfo: userToken, loggedInfo: logged};
    };

    const [token, setToken] = useState(getToken().tokenInfo);
    const [loggedIn, setLoggedId] = useState(getToken().loggedInfo);

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
        setLoggedId(true);
    };

    const logout = () => {
        console.log("logout");
        sessionStorage.removeItem('token');
        setToken();
        setLoggedId(false);
        setRol();
    };

    return {
        setRol,
        setToken: saveToken,
        token,
        loggedIn,
        logout
    }

}

export default useTokenAuth;