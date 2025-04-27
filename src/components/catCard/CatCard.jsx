import React from "react";
import styles from "./catCard.module.css";

const CatCard = ({ url, loadNewCat }) => {
  return (
    <div className={styles.card}>
      <img
        src={url}
        alt="Cute cat"
        className={styles.image}
        onClick={loadNewCat}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default CatCard;
