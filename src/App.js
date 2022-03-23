import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContext from './context';

import axios from 'axios';

import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';

import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetcData() {
      const cartResponse = await axios.get(
        'https://623874010a54d2ceab75d0ff.mockapi.io/cart'
      );
      const favoritesResponse = await axios.get(
        'https://623874010a54d2ceab75d0ff.mockapi.io/favorites'
      );
      const itemsResponse = await axios.get(
        'https://623874010a54d2ceab75d0ff.mockapi.io/items'
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetcData();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    try {
      if (cartItems.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://623874010a54d2ceab75d0ff.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post('https://623874010a54d2ceab75d0ff.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch {
      alert('Не удалось добавить в корзину');
    }
  };

  const onDeleteItems = (id) => {
    axios.delete(`https://623874010a54d2ceab75d0ff.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangesearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://623874010a54d2ceab75d0ff.mockapi.io/favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          'https://623874010a54d2ceab75d0ff.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch {
      alert('Не удалось добавить в избранное');
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded }}>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onDelete={onDeleteItems}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                favorites={favorites}
                onAddToCart={onAddToCart}
                onChangesearchInput={onChangesearchInput}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
