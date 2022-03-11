import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.png';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
