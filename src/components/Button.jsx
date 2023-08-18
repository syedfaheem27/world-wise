import React from "react";
import styles from "./Button.module.css";
const Button = ({ onClick, children, type }) => {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;