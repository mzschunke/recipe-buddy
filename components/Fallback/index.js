import Link from "next/link";
import styles from "./Fallback.module.css";

export function Fallback() {
  return (
    <div className={styles["fallback-container"]}>
      <Link href={"/"}>
        <h1 className={styles["title"]}>Recipe Buddy</h1>
      </Link>
      <div className={styles["login-message"]}>
        <h2>You are not logged in 😕</h2>
        <Link href="/api/auth/signin">Sign in</Link>
      </div>
    </div>
  );
}
