import React from "react";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className = "header__left">
          <img width={40} height={40} src="/img/logo.png" alt="logo icon" />
          <div className="heder__left-info">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="">
          <li>
          <img width={18} height={18} src="/img/cart.svg" alt="cart icon" />
              <span>1205 грн</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="user icon" />
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
