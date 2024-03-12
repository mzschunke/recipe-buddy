import { signIn } from "next-auth/react";
import styles from "./SignInButton.module.css";

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
