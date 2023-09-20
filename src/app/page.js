import Search from "../../components/Search";
import styles from "./Homepage.module.css";
import Image from "next/image";
import dices from "../../lib/dices.png";
import RecipesButton from "../../components/MyRecipesButton";

export default function Home() {
  return (
    <>
      <div className={styles["header-container"]}>
        <h1 className={styles["title"]}>Recipe Buddy</h1>
      </div>
      <div className={styles["menu-container"]}>
        <RecipesButton />
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
