import styles from "./SignOutButton.module.css";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Logout from "../../../lib/logout.png";

export default function SignOutButton() {
  function handleSignOut() {
    signOut({ callbackUrl: "https://recipe-buddy-ten.vercel.app/" });
  }

  return (
    <button className={styles["sign-out"]} onClick={handleSignOut}>
      <div className={styles["sign-out-container"]}>
        <Image src={Logout} width={25} height={25} alt="Logout" />
        Logout
      </div>
    </button>
  );
}
