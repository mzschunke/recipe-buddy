import Link from "next/link";
import styles from "./BackButton.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackButton() {
  return (
    <>
      <Link href={"/recipes"} className={styles["back-button"]}>
        <IoMdArrowRoundBack size={35} color="lightseagreen" />
      </Link>
    </>
  );
}
