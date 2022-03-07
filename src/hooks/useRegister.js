import { useEffect, useState } from 'react';
import useLogin from '@hooks/useLogin';
import useTokenAuth from '@hooks/useTokenAuth';

const registerAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/auth/register';

const useRegister = (credentials) => {
  const [loginData, setLoginData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { token, setToken, loggedIn, rol } = useTokenAuth();
  const result = useLogin(loginData);

    useEffect(async () => {
        if(credentials != null) {
            await fetch(registerAPI, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(credentials)
            })
                .then(async (res) => await res.json())
                .then(async (response) => {
                  console.log(response);
                    switch(response) {
                        case `Email not found: ${credentials.email}`:
                          alert(response);
                            //console.log(isLoading);
                            //console.log("error");
                            break;
                        default:
                            setLoginData({
                              email: credentials.email, 
                              password: credentials.password,
                            });
                            break;
                    }
                //console.log(response);
                });
        } else {
            setIsLoading(false);
        }
    }, [credentials]);
    
    
    useEffect(() => {
    if (result.tokenLogin) {
      setToken(result.tokenLogin, result.rolLogin)
      setIsLoading(result.isLoading);
    }
    }, [result.tokenLogin, result.rolLogin, result.isLoading]);

    //alert("token state", tokenLogin);
    //alert("state"+rolLogin);
    
  return { isLoading, token, rol };
};

export default useRegister;
