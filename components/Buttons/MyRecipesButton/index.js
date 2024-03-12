import Link from "next/link";
import Image from "next/image";
import recipe from "../../../lib/recipe.png";
import styles from "./MyRecipesButton.module.css";

export default function RecipesButton() {
  return (
    <Link href="/recipes" className={styles["link"]}>
      <Image
        src={recipe}
        style={{ objectFit: "contain" }}
        width={60}
        height={60}
        alt="Picture of my recipes"
      ></Image>
      <p className={styles["link-text"]}>My Recipes</p>
    </Link>
  );
}
