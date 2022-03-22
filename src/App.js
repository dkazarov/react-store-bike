import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
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

  useEffect(() => {
    axios
      .get('https://623874010a54d2ceab75d0ff.mockapi.io/items')
      .then((res) => setItems(res.data));
    // Request cart data
    axios
      .get('https://623874010a54d2ceab75d0ff.mockapi.io/cart')
      .then((res) => setCartItems(res.data));
    axios
      .get('https://623874010a54d2ceab75d0ff.mockapi.io/favorites')
      .then((res) => setFavorites(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://623874010a54d2ceab75d0ff.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onDeleteItems = (id) => {
    axios.delete(`https://623874010a54d2ceab75d0ff.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangesearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://623874010a54d2ceab75d0ff.mockapi.io/favorites/${obj.id}`
      );
    } else {
      const { data } = await axios.post('https://623874010a54d2ceab75d0ff.mockapi.io/favorites', obj);
      setFavorites((prev) => [...prev, data]);
    }
  };

  return (
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
              searchValue={searchValue}
              favorites={favorites}
              onAddToCart={onAddToCart}
              onChangesearchInput={onChangesearchInput}
              onAddToFavorite={onAddToFavorite}
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
  );
}

export default App;
