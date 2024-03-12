import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "./BackButton.module.css";

export default function BackButton() {
  return (
    <>
      <Link href={"/recipes"} className={styles["back-button"]}>
        <IoMdArrowRoundBack size={35} color="lightseagreen" />
      </Link>
    </>
  );
}
