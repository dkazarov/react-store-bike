import React from "react";

import styles from "./Card.module.scss";

const Cart = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/unliked.svg" alt="unliked icon" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="product icon" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button onClick={props.onClick} className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
