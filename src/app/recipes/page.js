import Link from "next/link";
import RecipeList from "../../../components/RecipeList";
import styles from "./RecipePage.module.css";

export default async function RecipePage() {
  return (
    <>
      <Link href="/">Go Home</Link>
      <RecipeList />
      <Link href="/recipes/create" className={styles["button"]}>
        add recipe
      </Link>
    </>
  );
}
