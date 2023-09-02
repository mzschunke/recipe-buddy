import Link from "next/link";
import RandomMeal from "../../../components/RandomMeal";
import RecipeCard from "../../../components/RecipeCard";
import styles from "./RecipeList.module.css";

export default async function RecipeList() {
  return (
    <>
      <Link href="/">Go Home</Link>
      <RecipeCard />
      <Link href="/recipes/create" className={styles["button"]}>
        + Recipe
      </Link>
    </>
  );
}
