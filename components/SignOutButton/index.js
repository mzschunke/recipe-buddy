import Link from "next/link";
import styles from "./SignOutButton.module.css";

export default function SignOutButton() {
  return (
    <Link className={styles["sign-out"]} href="/api/auth/signout">
      Sign out
    </Link>
  );
}
