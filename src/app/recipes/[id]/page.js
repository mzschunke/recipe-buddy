"use client";

import styles from "./Recipes.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RecipeIngredients from "../../../../components/RecipeIngredients";
import RecipeInstructions from "../../../../components/RecipeInstructions";
import Loader from "../../../../components/Loader";
import BackButton from "../../../../components/BackButton";
import useRecipeData from "../../../../utilities/hooks/fetchdata";
import { handleDeleteRecipe } from "../../../../utilities/async/delete";
import sample from "../../../../lib/sample.jpg";

export default function RecipePage({ params }) {
  const id = params.id;
  const currentRecipe = useRecipeData(id);
  const router = useRouter();

  async function deleteRecipe(recipe, id) {
    await handleDeleteRecipe(recipe, id);
    router.push("/recipes");
  }

  return (
    <>
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
              <Link href={`/recipes/${id}/edit`} className={styles["buttons"]}>
                Edit recipe
              </Link>
              <Link
                href={`/recipes/`}
                onClick={(recipe) => deleteRecipe(recipe, id)}
                className={styles["buttons"]}
              >
                Delete recipe
              </Link>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
