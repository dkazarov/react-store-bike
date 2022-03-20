import React from "react";

import styles from "./Card.module.scss";

const Cart = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="/img/unliked.svg" alt="unliked icon" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="product icon" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <img className={styles.plus} onClick={props.onPlus} src="/img/btn-plus.svg" alt="Plus" />
      </div>
    </div>
  );
};

export default Cart;
