import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';

import styles from './Card.module.scss';

const Cart = ({
  id,
  title,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ id, title, price, imageUrl });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="106" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="137" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="171" rx="5" ry="5" width="80" height="24" />
          <rect x="124" y="162" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
              alt="unliked icon"
            />
          </div>
          <img width='100%' height={135} src={imageUrl} alt="product icon" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} грн</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
