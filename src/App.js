import React from "react";

function App() {
  return (
    <div className="container">
      <header className="header">
          <div className="logo__inner">
            <div className="logo__img-inner">
              <img className="logo__img" src="/img/logo.png" alt="logo icon" />
            </div>
            <div className="logo__text">
              <h2 className="logo__text-title">REACT SNEAKERS</h2>
              <h5>Магазин лучших кроссовок</h5>
            </div>
          </div>

          <div className="header__action">
            <div>
            <img className="header__action-cart" src="/img/cart.svg" alt="card icon" />
            <span>1200 грн</span>
            <img className="header__action-favorite" src="/img/heart.svg" alt="heart icon" />
            <img className="header__action-user" src="/img/user.svg" alt="user icon" />
            </div>
          </div>
      </header>
      <main className="main">
        <h1 className="main__title">Все кроссовки</h1>
        <div className="card">
          <img className="card__img" width={133} height={112} src="/img/sneakers/1.jpg" alt="product icon" />
          <p className="card__descr">Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="card__price">
              <p className="card__price-subtitle">Цена:</p>
              <p className="card__price-price">1200 грн</p>
          </div>
            <button className="card__price-btn">Купить</button>
        </div>
      </main>
    </div>  
  );
}

export default App;
