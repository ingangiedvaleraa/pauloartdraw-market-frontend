import { useEffect, useState } from 'react';
import useTokenAuth from '@hooks/useTokenAuth';

const listAllProductsAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/products/all';

const useGetProducts = () => {
  const { token } = useTokenAuth();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    await fetch(listAllProductsAPI, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(async (res) => await res.json())
      .then(async (response) => {
        setProducts(await response);
        setIsLoading(false);
      });
  }, []);

  const editProduct = (payload) => {
    setIsLoading(true);
    setIsEditProduct(true);
    setSelectedProduct(payload);
    setIsLoading(false);
  };

  const newProduct = () => {
    setIsLoading(true);
    setSelectedProduct();
    setIsEditProduct(false);
    setIsLoading(false);
  };

  return {
    products,
    isLoading,
    editProduct,
    newProduct,
    selectedProduct,
    isEditProduct,
  };
};

export default useGetProducts;
