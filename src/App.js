import React, { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App() {
  const [items, setItems ] = useState([])
  const [cartOpened, setCartOpened] = useState(false);

useEffect(()=> {
  fetch('https://623874010a54d2ceab75d0ff.mockapi.io/items')
    .then(res => res.json())
    .then(json => setItems(json))
}, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search icon" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={() => console.log("Click to plus button")}
              onFavorite={() => console.log("Add to favorite")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
