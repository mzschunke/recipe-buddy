import Link from "next/link";
import styles from "./SignInButton.module.css";

export default function SignInButton() {
  return (
    <Link className={styles["sign-in"]} href="/api/auth/signin">
      Sign in
    </Link>
  );
}
