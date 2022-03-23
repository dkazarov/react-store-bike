import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';

const Home = ({
  items,
  searchValue,
  onAddToCart,
  onChangesearchInput,
  onAddToFavorite,
  setSearchValue,
  isLoading,
}) => {
  const { isItemAdded } = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(item)}
        onPlus={(obj) => onAddToCart(item)}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск: ${searchValue}` : 'Все модели'}</h1>
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
      <div className="d-flex flex-wrap justify-between">{renderItems()}</div>
    </div>
  );
};

export default Home;
