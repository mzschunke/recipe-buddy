"use client";

import { useState } from "react";
import useSWR from "swr";
import styles from "./Search.module.css";
import Loader from "../Loader";
import RecipeCard from "../RecipeCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isValidating } = useSWR(
    searchQuery ? `${URL}${searchQuery}` : null,
    fetcher
  );

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (error) return <div>Failed to load</div>;

  return (
    <>
      <div className={styles["search-container"]}>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleInputChange}
          className={styles["search-input"]}
          placeholder="Search for a recipe..."
        />
      </div>

      <div>
        {isValidating && <Loader />}
        {data && data.meals === null ? (
          <div className={styles["no-result"]}>No recipes found</div>
        ) : null}
        {data && data.meals && data.meals.length > 0 && (
          <div className={styles["list-container"]}>
            <ul className={styles["product-list"]}>
              {data.meals.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.idMeal} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
