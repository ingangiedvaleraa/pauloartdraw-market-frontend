import { useEffect, useState } from 'react';
import useLogin from '@hooks/useLogin';
import useTokenAuth from '@hooks/useTokenAuth';

const registerAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/auth/register';

const useRegister = (credentials) => {
  const [tokenLogin, setTokenLogin] = useState();
  const [loginData, setLoginData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [rolLogin, setRolLogin] = useState();
  const { setToken, loggedIn, rol } = useTokenAuth();
  const result = useLogin(loginData);

    useEffect(async () => {
        if(credentials != null) {
            await fetch(loginAPI, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(credentials)
            })
                .then(async (res) => await res.json())
                .then(async (response) => {
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
    
    
    useEffect(() => {
    result.tokenLogin ? setToken(result.tokenLogin, result.rolLogin) : console.log("nada");
  }, [result.tokenLogin, result.rolLogin]);

    //alert("token state", tokenLogin);
    //alert("state"+rolLogin);
    
  return { tokenLogin, isLoading, rolLogin };
};

export default useRegister;
