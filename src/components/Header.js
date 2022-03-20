import React from "react";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo icon" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart icon"/>
          <span>1200 грн</span>
        </li>
        <li>
          <img className="mr-20 cu-p" width={18} height={18} src="/img/heart.svg"alt="favorite icon" />
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg"alt="user icon" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
