import Link from "next/link";
import styles from "./PrivacyButton.module.css";

export default function PrivacyButton() {
  return (
    <div className={styles["privacy-container"]}>
      <Link href="/privacy" className={styles["privacy-button"]}>
        Datenschutzhinweise
      </Link>
    </div>
  );
}
