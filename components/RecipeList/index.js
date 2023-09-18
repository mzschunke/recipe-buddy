"use client";

import styles from "./RecipeCard.module.css";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import sample from "../../lib/sample.jpg";
import Loader from "../Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RecipeList() {
  const { data } = useSWR("/api/recipes", fetcher);

  return (
    <div className={styles["overview-container"]}>
      {data ? (
        <ul className={styles["product-list"]}>
          {data.map((meal) => (
            <Link
              key={meal._id}
              href={`/recipes/${meal._id}`}
              className={styles["link"]}
            >
              <li className={styles["product-card"]}>
                {meal.strMealThumb ? (
                  <Image
                    src={meal.strMealThumb}
                    width={250}
                    height={250}
                    style={{ objectFit: "contain" }}
                    alt={meal.strMeal}
                  />
                ) : (
                  <Image
                    src={sample}
                    width={250}
                    height={250}
                    style={{ objectFit: "contain" }}
                    alt={meal.strMeal}
                  />
                )}
                <h2 className={styles["title"]}>{meal.strMeal}</h2>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  );
}
