import React from 'react';
import '@styles/Menu.scss';
import useTokenAuth from '@hooks/useTokenAuth';

const Menu = () => {
const { logout } = useTokenAuth();

  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/" className="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/account">My account</a>
        </li>
        <li>
          <a className='logout' href="/" onClick={() => logout()}>Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
