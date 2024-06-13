import React from "react";
import styles from "./InputTop.module.css";

import searchIcon from "../../Assets/Icons/search.png";

export const InputTop = () => {
  return (
    <div className={styles.main}>
      <button className={styles.button}>
        <img
          className={styles.searchIcon}
          alt="Search Icon"
          srcset={searchIcon}
        />
      </button>

      <input className={styles.input} type="search" placeholder="найти мем" />
    </div>
  );
};
