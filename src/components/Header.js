import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context.js';

const Header = (props) => {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.svg" alt="logo icon" />
          <div>
            <h3 className="text-uppercase">React store</h3>
            <p className="opacity-5">Магазин лучших Велосипедов</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="d-flex mr-20 cu-p">
          <img width={24} height={24} src="img/cart.svg" alt="cart icon" />
          <span><b>{totalPrice} грн</b></span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-20 cu-p"
              width={24}
              height={24}
              src="img/heart-header.svg"
              alt="favorite icon"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
