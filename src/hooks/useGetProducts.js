import { useEffect, useState } from "react";

const listAllProductsAPI = "https://pauloartdraw-market.herokuapp.com/pauloartdraw-market/api/products/all";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyQGFkbWluLmNvIiwiaWF0IjoxNjQ2NTkxMzE1LCJleHAiOjE2NDY2MjczMTV9.IleDkTaVsvmWd0qchHQk64z4c8IHC7OxPhBef9ddoOY";

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