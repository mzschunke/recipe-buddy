"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useRecipeData from "../../../../utilities/hooks/fetchdata";
import { handleDeleteRecipe } from "../../../../utilities/async/delete";
import { ProtectedRoute } from "../../../../components/ProtectedRoute";
import { Fallback } from "../../../../components/Fallback";
import BackButton from "../../../../components/Buttons/BackButton";
import Loader from "../../../../components/Loader";
import RecipeIngredients from "../../../../components/RecipeIngredients";
import RecipeInstructions from "../../../../components/RecipeInstructions";
import sample from "../../../../lib/sample.jpg";
import styles from "./Recipes.module.css";

export default function RecipePage({ params }) {
  const id = params.id;
  const currentRecipe = useRecipeData(id);
  const router = useRouter();

  async function deleteRecipe(recipe, id) {
    await handleDeleteRecipe(recipe, id);
    router.push("/recipes");
  }

  return (
    <ProtectedRoute fallback={<Fallback />}>
      <BackButton />
      <div className={styles["recipe-container"]}>
        {currentRecipe ? (
          <div className={styles["recipe-card"]}>
            <h2 className={styles["title"]}>{currentRecipe.strMeal}</h2>
            <div className={styles["description-container"]}>
              <p>Category: {currentRecipe.strCategory}</p>
              <p>Origin: {currentRecipe.strArea}</p>
            </div>
            <div className={styles["image-container"]}>
              {currentRecipe.strMealThumb ? (
                <Image
                  src={currentRecipe.strMealThumb}
                  width={325}
                  height={325}
                  style={{ objectFit: "contain" }}
                  alt={currentRecipe.strMeal}
                />
              ) : (
                <Image
                  src={sample}
                  width={325}
                  height={325}
                  style={{ objectFit: "contain" }}
                  alt={currentRecipe.strMeal}
                />
              )}
            </div>
            <RecipeIngredients recipe={currentRecipe} />
            <RecipeInstructions recipe={currentRecipe} />
            <div className={styles["button-container"]}>
              <Link
                href={`/recipes/${id}/edit`}
                className={styles["edit-button"]}
              >
                Edit Recipe
              </Link>
              <Link
                href={`/recipes/`}
                onClick={(recipe) => deleteRecipe(recipe, id)}
                className={styles["delete-button"]}
              >
                Delete Recipe
              </Link>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </ProtectedRoute>
  );
}
