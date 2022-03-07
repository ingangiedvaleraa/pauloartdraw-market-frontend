import React, { useContext } from 'react';
import '@styles/OrderItem.scss';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';

const OrderItem = (props) => {
  const { product, indexValue } = props;
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="OrderItem">
      <figure>
        <img
          src={`data:image/jpeg;base64,${product.image}`}
          alt={product.name}
        />
      </figure>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" onClick={() => removeFromCart(indexValue)} />
    </div>
  );
};

export default OrderItem;
