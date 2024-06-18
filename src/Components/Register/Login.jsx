import React from "react";
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
    <div>
      <Form title="ВОЙТИ" handleClick={handleLogin} />
    </div>
  );
};
