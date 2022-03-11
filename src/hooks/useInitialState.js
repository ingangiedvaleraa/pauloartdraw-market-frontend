import { useState } from 'react';
import useGetProducts from '@hooks/useGetProducts';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const productsState = useGetProducts();

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
    productsState,
  };
};

export default useInitialState;
