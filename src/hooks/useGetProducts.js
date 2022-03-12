import { useEffect, useState } from 'react';
import useTokenAuth from '@hooks/useTokenAuth';

const listAllProductsAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/products/all';

const createNewProductAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/products';

const useGetProducts = () => {
  const { token } = useTokenAuth();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isEditProduct, setIsEditProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    await getAllProducts();
  }, []);

  const getAllProducts = async () => {
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
  };

  const editProduct = async (payload) => {
    setIsLoading(true);
    setIsEditProduct(true);
    setSelectedProduct(await payload);
    setIsLoading(false);
  };

  const deleteProduct = async (id) => {
    setIsLoading(true);
    await fetch(`${createNewProductAPI}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(async (response) => {
        await getAllProducts();
        setIsLoading(false);
        //console.log(response);
      });
  };

  const newProduct = () => {
    setIsLoading(true);
    setSelectedProduct();
    setIsEditProduct(false);
    setIsLoading(false);
  };

  const createProduct = async (data) => {
    setIsLoading(true);
    //console.log(data);
    await fetch(createNewProductAPI, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => await res.json())
      .then(async (response) => {
        
        await getAllProducts();
        setIsLoading(false);
        //console.log(response);
      });
  };

  const updateProduct = async (id, data) => {
    setIsLoading(true);
    //console.log(data);
    await fetch(`${createNewProductAPI}/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => await res.json())
      .then(async (response) => {
        
        await getAllProducts();
        setIsLoading(false);
        //console.log(response);
      });
  };

  return {
    products,
    isLoading,
    editProduct,
    newProduct,
    selectedProduct,
    isEditProduct,
    createProduct,
    deleteProduct,
    updateProduct,
  };
};

export default useGetProducts;
