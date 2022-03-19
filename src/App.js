import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className = "d-flex align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="logo icon" />
          <div className="header__left-info ">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
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
