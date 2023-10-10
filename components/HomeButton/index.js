import Link from "next/link";
import styles from "./HomeButton.module.css";
import { BiSolidHome } from "react-icons/bi";

export default async function HomeButton() {
  return (
    <>
      <Link href="/" className={styles["home-button"]}>
        <BiSolidHome size={30} color="lightseagreen" />
      </Link>
    </>
  );
}
