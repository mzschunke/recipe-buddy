"use client";

import styles from "./RecipeList.module.css";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import sample from "../../lib/sample.jpg";
import Loader from "../Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const RecipeItem = ({ meal }) => (
  <Link href={`/recipes/${meal._id}`} className={styles["link"]} key={meal._id}>
    <li className={styles["product-card"]}>
      <Image
        src={meal.strMealThumb || sample}
        width={250}
        height={250}
        style={{ objectFit: "contain" }}
        alt={meal.strMeal}
      />
      <h2 className={styles["recipe-name"]}>{meal.strMeal}</h2>
    </li>
  </Link>
);

export default function RecipeList() {
  const { data } = useSWR("/api/recipes", fetcher);
  return (
    <div className={styles["overview-container"]}>
      <p className={styles["headline"]}>My recipes</p>
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
