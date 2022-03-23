import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContext from './context';

import axios from 'axios';

import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';

import Drawer from './components/Drawer/Drawer';
import Header from './components/Header';

function App() {
  // States
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(cartItems);

  useEffect(() => {
    async function fetcData() {
      try {
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
      } catch {
        alert('Ошибка при запросе данных');
      }
    }

    fetcData();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj.id)
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        axios.delete(
          `https://623874010a54d2ceab75d0ff.mockapi.io/cart/${obj.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        axios.post('https://623874010a54d2ceab75d0ff.mockapi.io/cart', obj);
      }
    } catch {
      alert('Не удалось добавить в корзину');
    }
  };

  const onDeleteItems = async (id) => {
    try {
      await axios.delete(`https://623874010a54d2ceab75d0ff.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch {
      alert('Не удалось удалить из корзины');
    }
  };

  const onChangesearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://623874010a54d2ceab75d0ff.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
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
    <AppContext.Provider
      value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onDelete={onDeleteItems}
          opened={cartOpened}
        />
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
                isItemAdded={isItemAdded}
                onAddToCart={onAddToCart}
                onChangesearchInput={onChangesearchInput}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
