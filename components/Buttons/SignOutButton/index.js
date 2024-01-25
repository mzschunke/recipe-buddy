import styles from "./SignOutButton.module.css";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  function handleSignOut() {
    const userConfirmed = window.confirm("Are you sure you want to sign out?");
    if (userConfirmed) {
      signOut({ callbackUrl: "http://localhost:3000/" });
    }
  }

  return (
    <button className={styles["sign-out"]} onClick={handleSignOut}>
      Sign Out
    </button>
  );
}
