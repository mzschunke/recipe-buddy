"use client";

import styles from "../RecipeList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RecipePage() {
  const { data } = useSWR("/api/recipes", fetcher);
  const pathname = usePathname();
  const pathID = pathname.match(/\d/g).join("");
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    if (data) {
      const foundRecipe = data.find((recipe) => recipe.idMeal === pathID);
      setCurrentRecipe(foundRecipe);
      console.log("Data:", data);
    }
  }, [data, pathID]);

  return (
    <div className={styles["recipe-container"]}>
      {currentRecipe ? (
        <div className={styles["recipe-card"]}>
          <h2 className={styles["title"]}>{currentRecipe.strMeal}</h2>
          <Image
            src={currentRecipe.strMealThumb}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
            alt={currentRecipe.strMeal}
          />
          <dl className={styles["description-list"]}>
            <dt>Description: </dt>
            <dd>{currentRecipe.strCategory}</dd>
            <dt>Area:</dt>
            <dd>{currentRecipe.strArea}</dd>
          </dl>
          Ingredients coming soon...
        </div>
      ) : (
        "Meal not found"
      )}
      <Link href={"/recipes"}>Go back</Link>
      <Link href={`/recipes/${pathID}/edit`} passHref legacyBehavior>
        Edit
      </Link>
    </div>
  );
}
