import React from "react";

const Drawer = ({ onClose, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          {" "}
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove icon"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemimg"
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
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
              <b>2400 грн</b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>140 грн</b>
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
