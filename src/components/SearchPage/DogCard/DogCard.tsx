import React from "react";
import styles from "./styles.module.css";

const Card = ({ name, img }) => {
  return (
    <div className={styles.container}>
      <div className="card-image">
        <img src={img} alt={name} />
      </div>
      <div className="card-title">{name}</div>
    </div>
  );
};

export default Card;
