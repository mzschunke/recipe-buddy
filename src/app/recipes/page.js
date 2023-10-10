import Link from "next/link";
import RecipeList from "../../../components/RecipeList";
import styles from "./RecipePage.module.css";
import HomeButton from "../../../components/HomeButton";

export default async function RecipePage() {
  return (
    <>
      <HomeButton />
      <RecipeList />
      <Link href="/recipes/create" className={styles["add-button"]}>
        add recipe
      </Link>
    </>
  );
}
