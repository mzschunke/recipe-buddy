import styles from "./SignOutButton.module.css";
import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className={styles["sign-out"]}
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
    >
      Sign Out
    </button>
  );
}
