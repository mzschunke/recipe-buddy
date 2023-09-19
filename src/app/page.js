import Link from "next/link";
import Search from "../../components/Search";
import styles from "./Homepage.module.css";
import Image from "next/image";
import recipe from "../../lib/recipe.png";
import dices from "../../lib/dices.png";

export default function Home() {
  return (
    <>
      <div className={styles["header-container"]}>
        <h1 className={styles["title"]}>Recipe Buddy</h1>
      </div>
      <div className={styles["menu-container"]}>
        <Link href="/recipes" className={styles["link"]}>
          <Image
            src={recipe}
            style={{ objectFit: "contain" }}
            width={35}
            height={35}
            alt="Picture of my recipes"
          ></Image>
          <p className={styles["link-text"]}>My recipes</p>
        </Link>
        <button className={styles["button"]}>
          <Image
            src={dices}
            style={{ objectFit: "contain" }}
            width={35}
            height={35}
            alt="Picture of dices"
          ></Image>
          <p className={styles["link-text"]}>Random meal</p>
        </button>
      </div>
      <Search />
    </>
  );
}
