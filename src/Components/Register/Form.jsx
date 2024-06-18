import React from "react";
import { useState } from "react";

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <section>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-MAIL"
        value={email}
      />

      <input
        type="password"
        onChange={(e) => setPass(e.target.value)}
        placeholder="PASSWORD"
        value={pass}
      />

      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </section>
  );
};
