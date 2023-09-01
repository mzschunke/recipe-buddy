"use client";

import styles from "./RecipeCard.module.css";
import useSWR from "swr";
import Image from "next/image";

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
          <ul className={styles["product-list"]}>
            {data.map((meal) => (
              <li key={meal.idMeal} className={styles["product-card"]}>
                <h2 className={styles["title"]}>{meal.strMeal}</h2>
                <Image
                  src={meal.strMealThumb}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                  alt={meal.strMeal}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div>loading..</div>
        )}
      </div>
    </>
  );
}
