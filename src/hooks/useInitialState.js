import { useEffect, useState } from 'react';
import useGetProducts from '@hooks/useGetProducts';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const productsState = useGetProducts();
  const [state, setState] = useState({ initialState, productsState });

  useEffect(() => {
    if (!productsState.isLoading) {
      updateProductsState(productsState);
    }
  }, [
    productsState.isLoading,
    productsState.products,
    productsState.isEditProduct,
    productsState.selectedProduct,
  ]);

  const updateProductsState = (payload) => {
    setState({
      ...initialState,
      productsState: payload,
    });
  };

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items, index) => index !== payload),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
