import React from "react";
import styles from "./Header.module.css";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

import { BurgerMenu } from "../Burger/Burger";
import { InputTop } from "../InputTop/InputTop";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  console.log(isAuth, email);

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

      {!email && (
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
      )}

      {email && (
        <div className={styles.logOut}>
          <button onClick={() => dispatch(removeUser())}>
            Log Out from {email}
          </button>
        </div>
      )}
      <div className={styles.burger}>
        <BurgerMenu />
      </div>
    </section>
  );
};
