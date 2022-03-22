import React from 'react';
import Card from '../components/Card';

const Home = ({
  searchValue,
  onChangesearchInput,
  items,
  onAddToCart,
  setSearchValue,
  onAddToFavorite,
}) => {
  return (
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
              onFavorite={(obj) => onAddToFavorite(item)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
