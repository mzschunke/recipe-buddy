"use client";

import styles from "./RegistrationForm.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExists.json();
      if (user) {
        setError("User already exists");
        return;
      }
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        const form = event.target;
        form.reset();
        router.push("/api/auth/signin");
        window.alert("User registered successfully");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
  };

  return (
    <>
      <h2>No Account? Register here:</h2>
      <form onSubmit={handleSubmit} className={styles["registration-form"]}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="name"
          name="name"
          id="name"
        ></input>
        <label htmlFor="email">E-mail address:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
        ></input>
        <button type="submit">Register</button>
        {error && <p className={styles["error-message"]}>{error}</p>}
      </form>
    </>
  );
}
