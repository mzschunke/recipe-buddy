import styles from "./SignInButton.module.css";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button
      className={styles["sign-in"]}
      onClick={() =>
        signIn(undefined, { callbackUrl: "http://localhost:3000/login" })
      }
    >
      Sign In
    </button>
  );
}
