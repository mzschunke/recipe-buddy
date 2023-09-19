import Link from "next/link";
import RecipeList from "../../../components/RecipeList";
import styles from "./RecipePage.module.css";
import Image from "next/image";
import home from "../../../lib/home.png";

export default async function RecipePage() {
  return (
    <>
      <Link href="/" className={styles["home-button"]}>
        <Image
          src={home}
          style={{ objectFit: "contain" }}
          width={35}
          height={35}
          alt="Picture of my recipes"
        ></Image>
      </Link>
      <RecipeList />
      <Link href="/recipes/create" className={styles["add-button"]}>
        add recipe
      </Link>
    </>
  );
}
