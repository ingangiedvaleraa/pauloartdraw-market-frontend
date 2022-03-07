import { useEffect, useState } from 'react';
import useTokenAuth from '@hooks/useTokenAuth';

const listAllProductsAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/products/all';

const useGetProducts = () => {
const { token } = useTokenAuth();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(listAllProductsAPI, {
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
        setProducts(response);
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading };
};

export default useGetProducts;
