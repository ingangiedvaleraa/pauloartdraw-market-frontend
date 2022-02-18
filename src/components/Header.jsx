import React from 'react';
import '@styles/Header.scss';

import iconMenu from '@icons/icon_menu.png';
import logoYardSale from '@logos/logo_yard_sale.png';
import iconShoppingCart from '@icons/icon_shopping_cart.png';

const Header = () => {
    return (
       <nav>
            <img src={iconMenu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logoYardSale} alt="logo" className="nav-logo" />
                <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Toys</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                <li className="navbar-email">platzi@example.com</li>
                <li className="navbar-shopping-cart">
                    <img src={iconShoppingCart} alt="shopping cart" />
                    <div>2</div>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;