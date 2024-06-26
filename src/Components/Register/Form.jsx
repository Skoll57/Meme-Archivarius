import React from "react";
import styles from "./Form.module.css";

import { useState } from "react";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <section className={styles.main}>
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ПОЧТА"
          value={email}
        />

        <br />

        <input
          className={styles.input}
          type="password"
          onChange={(e) => setPass(e.target.value)}
          onClick={(e) => {}}
          placeholder="ПАРОЛЬ"
          value={pass}
        />
      </div>

      <button
        className={styles.btn}
        onClick={() => {
          handleClick(email, pass);
          setEmail("");
          setPass("");
        }}
      >
        {title}
      </button>
    </section>
  );
};
