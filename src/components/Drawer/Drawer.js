import React, { useContext } from 'react';
import AppContext from '../../context.js';

import './Drawer.scss';

const Drawer = ({ onClose, items = [], onDelete, opened }) => {
  const { cartItems } = useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <div className={`overlay ${opened ? 'overlayVisible' : ''}`}>
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          {' '}
          Корзина{' '}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove icon"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemimg"
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                onClick={() => onDelete(obj.id)}
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove icon"
              />
            </div>
          ))}
        </div>

        <div className="cartTotlaBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>{totalPrice} грн</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
