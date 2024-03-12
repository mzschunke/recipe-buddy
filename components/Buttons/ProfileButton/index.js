import Image from "next/image";
import Link from "next/link";
import avatar from "../../../lib/avatar.png";
import styles from "./ProfileButton.module.css";

export default function ProfileButton() {
  return (
    <Link className={styles["profile-button"]} href="/profile">
      <div className={styles["profile-container"]}>
        <Image src={avatar} width={25} height={25} alt="Profile Avatar" />
        Profile
      </div>
    </Link>
  );
}
