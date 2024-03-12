import Link from "next/link";
import { BiHome } from "react-icons/bi";
import styles from "./HomeButton.module.css";

export default async function HomeButton() {
  return (
    <>
      <Link href="/" className={styles["home-button"]}>
        <BiHome size={35} color="lightseagreen" />
      </Link>
    </>
  );
}
