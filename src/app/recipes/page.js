import Link from "next/link";
import RecipeCard from "../../../components/RecipeCard";
import styles from "./RecipeList.module.css";

export default async function RecipeList() {
  return (
    <>
      <Link href="/">Go Home</Link>
      <RecipeCard />
      <Link href="/recipes/create" className={styles["button"]}>
        add recipe
      </Link>
    </>
  );
}
