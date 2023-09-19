import Link from "next/link";
import Search from "../../components/Search";
import styles from "./Homepage.module.css";
import Image from "next/image";
import recipe from "../../lib/recipe.png";

export default function Home() {
  return (
    <>
      <div className={styles["header-container"]}>
        <h1 className={styles["title"]}>Recipe Buddy</h1>
      </div>
      <div className={styles["menu-container"]}>
        <Link href="/recipes">
          <Image
            src={recipe}
            style={{ objectFit: "contain" }}
            width={40}
            height={40}
            alt="Picture of my recipes"
          ></Image>
          Go to my recipes
        </Link>
        <Search />
      </div>
    </>
  );
}
