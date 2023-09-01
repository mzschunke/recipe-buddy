"use client";

import styles from "./RecipeCard.module.css";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RecipeCard() {
  const { data, error, isLoading } = useSWR("/api/recipes", fetcher);
  if (data) {
    console.log("Data received:", data);
  }
  if (error) {
    console.log(error);
  }
  if (isLoading) {
    console.log("Loading");
  }

  return (
    <>
      <div className={styles["product-container"]}>
        {data ? (
          <ul>
            {data.map((meal) => (
              <li key={meal.idMeal}>{meal.strMeal}</li>
            ))}
          </ul>
        ) : (
          <div>loading..</div>
        )}
      </div>
    </>
  );
}
