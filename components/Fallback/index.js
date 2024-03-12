"use client";

import Link from "next/link";
import SignInButton from "../Buttons/SignInButton";
import RegistrationForm from "../RegistrationForm";
import styles from "./Fallback.module.css";

export function Fallback() {
  return (
    <div className={styles["fallback-container"]}>
      <Link href={"/"}>
        <h1 className={styles["title"]}>Recipe Buddy</h1>
      </Link>
      <div className={styles["login-message"]}>
        <h2>You need to be signed in to continue.</h2>
        <SignInButton />
      </div>
      <RegistrationForm />
    </div>
  );
}
