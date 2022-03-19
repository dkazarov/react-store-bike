import React from "react";

function App() {
  return (
    <div className="container">
      <header className="heagitder">
          <div className="logo__inner">
            <img className="logo__img" src="/img/logo.png" alt="logo icon" />
            <h2>REACT SNEAKERS</h2>
            <h5>Магазин лучших кроссовок</h5>
          </div>

          <div className="header__action">
            <img src="/img/card.svg" alt="card icon" />
            <p>1200 грн</p>
            <img src="/img/heart.svg" alt="heart icon" />
            <img src="/img/user.svg" alt="user icon" />
          </div>
      </header>
    </div>  
  );
}

export default App;
