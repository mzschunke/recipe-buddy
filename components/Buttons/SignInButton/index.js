import styles from "./SignInButton.module.css";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  function handleSignIn() {
    signIn(undefined, {
      callbackUrl: "https://recipe-buddy-ten.vercel.app/dashboard",
    });
  }

  return (
    <button className={styles["sign-in"]} onClick={handleSignIn}>
      Sign In
    </button>
  );
}
