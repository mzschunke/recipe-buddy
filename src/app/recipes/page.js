"use client";

import styles from "./RecipeList.module.css";
import recipes from "./recipes.json";
import Link from "next/link";
import RandomMeal from "../../../components/RandomMeal";
import useSWR from "swr";

export default function RecipeList() {
  return (
    <div className={styles["recipe-container"]}>
      {recipes.map(({ title, id }) => (
        <div key={id} className={styles["recipe-card"]}>
          <Link href={`/recipes/${id}`}>
            <h2 className={styles.title}>{title}</h2>
          </Link>
        </div>
      ))}
      <Link href="/">Go home</Link>
      <RandomMeal />
    </div>
  );
}
