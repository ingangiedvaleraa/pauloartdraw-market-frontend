import { useEffect, useState } from "react";

const listAllProductsAPI = "https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/products/all";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyQGFkbWluLmNvIiwiaWF0IjoxNjQ2Mjc2NDM1LCJleHAiOjE2NDYzMTI0MzV9.FvZpv0W9uaItnmj1D9_EyuRLVXCfvuiprGfxqxP6B90";

const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(listAllProductsAPI, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
            setProducts(response);
            setIsLoading(false);
          });
      }, []);
    
      return { products, isLoading };
}

export default useGetProducts;