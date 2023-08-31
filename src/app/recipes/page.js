"use client";

import styles from "./RecipeList.module.css";
import recipes from "./recipes.json";
import Link from "next/link";
import RandomMeal from "../../../components/RandomMeal";

export default function RecipeList() {
  return (
    <>
      <Link href="/">Go Home</Link>
      <div className={styles["recipe-container"]}>
        <div className={styles["recipe-card"]}>
          <RandomMeal />
        </div>
      </div>
    </>
  );
}
