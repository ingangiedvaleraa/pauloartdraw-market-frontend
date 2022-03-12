import { useEffect, useState } from 'react';
import useGetProducts from '@hooks/useGetProducts';
import useCategories from '@hooks/useCategories';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const productsState = useGetProducts();
  const categoriesState = useCategories();
  const [state, setState] = useState({
    initialState,
    productsState,
    categoriesState,
  });
  //console.log(state);

  useEffect(() => {
    updateProductsState(productsState);
  }, [
    productsState.isLoading,
    productsState.products,
    productsState.isEditProduct,
    productsState.selectedProduct,
  ]);

  useEffect(() => {
    updateCategoriesState(categoriesState);
  }, [categoriesState.isLoading, categoriesState.categories]);

  const updateCategoriesState = (payload) => {
    setState({
      ...state,
      categoriesState: payload,
    });
  };

  const updateProductsState = (payload) => {
    setState({
      ...state,
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
