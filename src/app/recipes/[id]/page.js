"use client";

import styles from "../RecipeList.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Image from "next/image";
import sample from "../../../../lib/sample.jpg";
import RecipeIngredients from "../../../../components/RecipeInstructions";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RecipePage({ params }) {
  const { data } = useSWR("/api/recipes", fetcher);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    if (data) {
      const foundRecipe = data.find((recipe) => recipe._id === id);
      setCurrentRecipe(foundRecipe);
    }
  }, [data, id]);

  async function deleteRecipe() {
    await fetch(`/api/recipes/${id}`, { method: "DELETE" })
      .then((response) => {
        if (response.ok) {
          router.push("/recipes");
          console.log("Recipe deleted.");
        } else {
          console.error("Failed to delete recipe.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className={styles["recipe-container"]}>
      {currentRecipe ? (
        <div className={styles["recipe-card"]}>
          <Link href={"/recipes"}>Go back</Link>
          <h2 className={styles["title"]}>{currentRecipe.strMeal}</h2>
          <Image
            src={currentRecipe.strMealThumb || sample}
            width={250}
            height={250}
            style={{ objectFit: "contain" }}
            alt={currentRecipe.strMeal}
          />
          <dl className={styles["description-list"]}>
            <dt>Category: </dt>
            <dd>{currentRecipe.strCategory}</dd>
            <dt>Area:</dt>
            <dd>{currentRecipe.strArea}</dd>
          </dl>
          <RecipeIngredients recipe={currentRecipe} />
          <Link href={`/recipes/${id}/edit`} passHref legacyBehavior>
            Edit
          </Link>
          <button onClick={deleteRecipe} type="button">
            Delete recipe
          </button>
        </div>
      ) : (
        "Meal not found"
      )}
    </div>
  );
}
