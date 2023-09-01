"use client";

import styles from "../RecipeList.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSWR from "swr";
import { useState, useEffect } from "react";

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
    }
  }, [data, pathID]);

  return (
    <div className={styles["recipe-container"]}>
      <p>{currentRecipe ? currentRecipe.strMeal : "Meal not found"}</p>
      <Link href={"/recipes"}>Go back</Link>
    </div>
  );
}
