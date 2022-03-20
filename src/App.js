import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://623874010a54d2ceab75d0ff.mockapi.io/items')
      .then(res => setItems(res.data))
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangesearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Поиск: ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search icon" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="claer cu-p"
                src="/img/btn-remove.svg"
                alt="remove icon"
              />
            )}
            <input
              onChange={onChangesearchInput}
              type="text"
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            // Search
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            // Render Card
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => onAddToCart(item)}
                onFavorite={() => console.log('1')}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
