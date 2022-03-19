import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className = "d-flex align-center">
          <img className="m-15" width={40} height={40} src="/img/logo.png" alt="logo icon" />
          <div className="header__left-info ">
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex m-15">
          <li className="mr-20">
          <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="cart icon" />
              <span>1205 грн</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="user icon" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
