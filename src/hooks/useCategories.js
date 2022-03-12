import { useEffect, useState } from 'react';
import useTokenAuth from '@hooks/useTokenAuth';

const listAllCategoriesAPI =
  'https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/category/all';

const useCategories = () => {
  const { token } = useTokenAuth();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    await fetch(listAllCategoriesAPI, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(async (res) => await res.json())
      .then(async (response) => {
        setCategories(await response);
        setIsLoading(false);
      });
  }, []);

  return {
    categories,
    isLoading,
    selectedCategory,
    isEditCategory,
  };
};

export default useCategories;