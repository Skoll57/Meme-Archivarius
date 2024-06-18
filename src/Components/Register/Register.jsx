import React from "react";
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

  return <Form title="register" handleClick={handleRegister} />;
};
