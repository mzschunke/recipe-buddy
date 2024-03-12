"use client";

import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import Loader from "../Loader";
import sample from "../../lib/sample.jpg";
import styles from "./RecipeList.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RecipeItem = ({ meal }) => (
  <li className={styles["product-card"]}>
    <Link
      href={`/recipes/${meal._id}`}
      className={styles["link"]}
      key={meal._id}
    >
      <Image
        src={meal.strMealThumb || sample}
        width={250}
        height={250}
        style={{ objectFit: "contain" }}
        alt={meal.strMeal}
      />
    </Link>
    <h3 className={styles["recipe-name"]}>{meal.strMeal}</h3>
    <p>Category: {meal.strCategory}</p>
    <p>Area: {meal.strArea}</p>
  </li>
);

export default function RecipeList() {
  const { data } = useSWR("/api/recipes", fetcher);
  return (
    <div className={styles["overview-container"]}>
      {data && data.message === "No recipes found for this user" ? (
        <div className={styles["no-result"]}>
          You currently have no saved recipes 🧁
        </div>
      ) : (
        <>
          {data ? (
            <ul className={styles["product-list"]}>
              {data.map((meal) => (
                <RecipeItem key={meal._id} meal={meal} />
              ))}
            </ul>
          ) : (
            <Loader />
          )}
        </>
      )}
    </div>
  );
}
