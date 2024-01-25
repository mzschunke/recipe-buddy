import styles from "./SignInButton.module.css";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  function handleSignIn() {
    signIn(undefined, { callbackUrl: "http://localhost:3000/login" });
  }

  return (
    <button className={styles["sign-in"]} onClick={handleSignIn}>
      Sign In
    </button>
  );
}
