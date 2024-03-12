"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("recipes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Already have an Account?</h1>
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
        />
        <button type="submit">Login</button>
        {error && <p className={styles["error-message"]}>{error}</p>}
      </form>
    </>
  );
}
