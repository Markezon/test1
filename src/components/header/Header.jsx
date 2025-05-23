import { useState, useRef } from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Cat App</h1>
    </header>
  );
};

export default Header;
