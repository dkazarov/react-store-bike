import React from "react";

const Drawer = (props) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          {" "}
          Корзина{" "}
          <img
            onClick={props.onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove icon"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemimg"
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>1200 грн</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="remove icon"
            />
          </div>
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
