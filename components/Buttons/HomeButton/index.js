import Link from "next/link";
import styles from "./HomeButton.module.css";
import { BiHome } from "react-icons/bi";

export default async function HomeButton() {
  return (
    <>
      <Link href="/login" className={styles["home-button"]}>
        <BiHome size={35} color="lightseagreen" />
      </Link>
    </>
  );
}
