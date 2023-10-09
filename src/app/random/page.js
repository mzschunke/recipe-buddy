import Link from "next/link";
import Image from "next/image";
import styles from "./Random.module.css";
import home from "../../../lib/home.png";
import RandomMeal from "../../../components/RandomMeal";

export default async function RandomPage() {
  return (
    <>
      <Link href="/" className={styles["home-button"]}>
        <Image
          src={home}
          style={{ objectFit: "contain" }}
          width={35}
          height={35}
          alt="Home Button"
        ></Image>
      </Link>
      <div className={styles["title-container"]}>
        <h2 className={styles["title"]}>Random Meal</h2>
      </div>
      <RandomMeal />
    </>
  );
}
