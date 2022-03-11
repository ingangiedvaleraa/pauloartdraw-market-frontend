import { useEffect, useState } from 'react';
import useTokenAuth from '@hooks/useTokenAuth';

const listAllProductsAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/products/all';

const useGetProducts = () => {
  const { token } = useTokenAuth();
  const [ products, setProducts ] = useState([]);
  const [ selectedProduct, setSelectedProduct ] = useState();
  const [ isEditProduct, setIsEditProduct ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
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

  const editProduct = (payload) => {
    setSelectedProduct(payload);
    setIsEditProduct(true);
    console.log(isEditProduct);
  };
  
  const newProduct = () => {
    setSelectedProduct();
    setIsEditProduct(false);
  };

  return { products, isLoading, editProduct, newProduct, selectedProduct, isEditProduct };
};

export default useGetProducts;
