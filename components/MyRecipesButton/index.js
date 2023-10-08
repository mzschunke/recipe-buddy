import Link from "next/link";
import Image from "next/image";
import styles from "./MyRecipesButton.module.css";
import recipe from "../../lib/recipe.png";

export default function RecipesButton() {
  return (
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
  );
}
