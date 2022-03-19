import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay" style={{ display: "none" }}>
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            {" "}
            Корзина{" "}
            <img
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
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo icon" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1200 грн</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search icon" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
