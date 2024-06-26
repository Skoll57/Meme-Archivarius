import React from "react";
import styles from "./Register.module.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "../../store/slices/userSlice";
import { Form } from "./Form";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      // .then(console.log)
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
      .catch(console.error);
  };

  return (
    <div className={styles.bgWrapper}>
      <section className={styles.main}>
        <Form title="ЗАРЕГИСТРИРОВАТЬСЯ" handleClick={handleRegister} />
      </section>
    </div>
  );
};
