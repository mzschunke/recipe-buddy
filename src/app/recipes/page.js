"use clien"

import Link from "next/link";
import RecipeList from "../../../components/RecipeList";
import styles from "./RecipePage.module.css";
import HomeButton from "../../../components/HomeButton";
import { ProtectedRoute } from "../../../components/ProtectedRoute";
import { Fallback } from "../../../components/Fallback";

export default async function RecipePage() {
  return (
    
    <ProtectedRoute fallback={<Fallback />}>
      <HomeButton />
      <RecipeList />
      <Link href="/recipes/create" className={styles["add-button"]}>
        Add Recipe
      </Link>
      </ProtectedRoute >
      
  );
}
