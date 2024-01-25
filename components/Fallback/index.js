"use client";

import Link from "next/link";
import styles from "./Fallback.module.css";
import SignInButton from "../Buttons/SignInButton";

export function Fallback() {
  return (
    <div className={styles["fallback-container"]}>
      <Link href={"/"}>
        <h1 className={styles["title"]}>Recipe Buddy</h1>
      </Link>
      <div className={styles["login-message"]}>
        <h2>Please Sign In to continue:</h2>
        <SignInButton />
      </div>
    </div>
  );
}
