import { useEffect, useState } from 'react';

const loginAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/auth/login';

const useLogin = (credentials) => {
  const [tokenLogin, setTokenLogin] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
                    switch(response?.jwt) {
                        case `Email not found: ${credentials.email}`:
                            //console.log(isLoading);
                            //console.log("error");
                            break;
                        default:
                            //console.log("response", response.jwt);
                            setTokenLogin(await response.jwt);
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

    console.log("token state", tokenLogin);
    
  return { tokenLogin, isLoading };
};

export default useLogin;
