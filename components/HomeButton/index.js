import Link from "next/link";
import Image from "next/image";
import home from "../../lib/home.png";
import styles from "./HomeButton.module.css";

export default async function HomeButton() {
  return (
    <>
      <Link href="/" className={styles["home-button"]}>
        <Image
          src={home}
          style={{ objectFit: "contain" }}
          width={25}
          height={25}
          alt="Home Button"
        ></Image>
      </Link>
    </>
  );
}
