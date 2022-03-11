import { useEffect, useState } from 'react';
import useTokenAuth from '@hooks/useTokenAuth';

const listAllUsersAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/clients/all';

const useUsers = () => {
  const { token } = useTokenAuth();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(listAllUsersAPI, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        //console.log(response);
        setUsers(response);
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading };
};

export default useUsers;
