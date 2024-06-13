import React from "react";
import styles from "./Header.module.css";
import { BurgerMenu } from "../Burger/Burger";
import { InputTop } from "../InputTop/InputTop";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <NavLink className={styles.title} to="/">
          Meme Archivarius
        </NavLink>
      </div>

      <div className={styles.inputTop}>
        <InputTop />
      </div>

      <section className={styles.wrapper}>
        <div className={styles.register}>
          <NavLink className={styles.registerLink} to="/register">
            Зарегистрироваться
          </NavLink>
        </div>

        <div className={styles.login}>
          <NavLink className={styles.loginLink} to="/login">
            Войти
          </NavLink>
        </div>
      </section>

      <div className={styles.burger}>
        <BurgerMenu />
      </div>
    </section>
  );
};
