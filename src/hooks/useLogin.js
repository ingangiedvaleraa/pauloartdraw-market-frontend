import { useEffect, useState } from 'react';

const loginAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/auth/login';

const useLogin = (credentials) => {
  const [tokenLogin, setTokenLogin] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [rolLogin, setRolLogin] = useState();

  useEffect(async () => {
    if (credentials != null) {
      await fetch(loginAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(credentials),
      })
        .then(async (res) => await res.json())
        .then(async (response) => {
          switch (response?.token) {
            case `Email not found: ${credentials.email}`:
              alert(response?.token);
              //console.log(isLoading);
              //console.log("error");
              break;
            default:
              setRolLogin(await response.rol);
              setTokenLogin(await response.token);
              //console.log("token state", tokenLogin);
              break;
          }
          setIsLoading(false);
          //console.log(response);
        });
    } else {
      setIsLoading(false);
    }
  }, [credentials]);

  //alert("token state", tokenLogin);
  //alert("state"+rolLogin);

  return { tokenLogin, isLoading, rolLogin };
};

export default useLogin;
