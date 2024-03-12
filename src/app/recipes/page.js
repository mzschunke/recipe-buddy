import Link from "next/link";
import { ProtectedRoute } from "../../../components/ProtectedRoute";
import { Fallback } from "../../../components/Fallback";
import HomeButton from "../../../components/Buttons/HomeButton";
import Navigation from "../../../components/Navigation";
import RecipeList from "../../../components/MyRecipeList";
import styles from "./RecipePage.module.css";

export default async function RecipePage() {
  return (
    <ProtectedRoute fallback={<Fallback />}>
      <div className={styles["header-container"]}>
        <HomeButton />
        <h1 className={styles["title"]}>My Recipes</h1>
        <Navigation />
      </div>
      <RecipeList />
      <Link href="/recipes/create" className={styles["add-button"]}>
        Add Recipe
      </Link>
    </ProtectedRoute>
  );
}
