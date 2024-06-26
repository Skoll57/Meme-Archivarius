import React from "react";
import styles from "./Login.module.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../../store/slices/userSlice";
import { Form } from "./Form";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        <h1>{err}</h1>;
        alert(err);
      });
  };

  return (
    <section className={styles.bgWrapper}>
      <div className={styles.main}>
        <Form title="ВОЙТИ В ХАТУ!" handleClick={handleLogin} />
      </div>
    </section>
  );
};
