import React, { useContext, useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 1299,
    "imageUrl": "/img/sneakers/1.jpg"
  },
  {
    "title": "Мужские Кроссовки Nike Air Max 270",
    "price": 1560,
    "imageUrl": "/img/sneakers/2.jpg"
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 849,
    "imageUrl": "/img/sneakers/3.jpg"
  },
  {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 899,
    "imageUrl": "/img/sneakers/4.jpg"
  },
  {
    "title": "Мужские Кроссовки Under Armour Curry 8",
    "price": 1519,
    "imageUrl": "/img/sneakers/5.jpg"
  },
  {
    "title": "Мужские Кроссовки Nike Kyrie 7",
    "price": 899,
    "imageUrl": "/img/sneakers/6.jpg"
  },
  {
    "title": "Мужские Кроссовки Jordan Air Jordan 11",
    "price": 899,
    "imageUrl": "/img/sneakers/7.jpg"
  },
  {
    "title": "Мужские Кроссовки Nike LeBron XVIII",
    "price": 1649,
    "imageUrl": "/img/sneakers/8 .jpg"
  },
];

function App() {
  const [cartOpened, setCartOpened] = useState(false);

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
        <div className="d-flex">
          {arr.map((obj) => (
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
