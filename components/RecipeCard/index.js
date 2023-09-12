"use client";

import styles from "./RecipeCard.module.css";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import sample from "../../lib/sample.jpg";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RecipeCard() {
  const { data } = useSWR("/api/recipes", fetcher);

  return (
    <>
      <div className={styles["product-container"]}>
        {data ? (
          <ul className={styles["product-list"]}>
            {data.map((meal) => (
              <Link key={meal._id} href={`/recipes/${meal._id}`}>
                <li className={styles["product-card"]}>
                  <h2 className={styles["title"]}>{meal.strMeal}</h2>
                  {meal.strMealThumb ? (
                    <Image
                      src={meal.strMealThumb}
                      width={200}
                      height={200}
                      style={{ objectFit: "contain" }}
                      alt={meal.strMeal}
                    />
                  ) : (
                    <Image
                      src={sample}
                      width={200}
                      height={200}
                      style={{ objectFit: "contain" }}
                      alt={meal.strMeal}
                    />
                  )}
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div>loading..</div>
        )}
      </div>
    </>
  );
}
