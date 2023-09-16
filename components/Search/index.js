"use client";

import { useState } from "react";
import useSWR from "swr";
import styles from "./Search.module.css";
import Loader from "../Loader";

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
        Look for a recipe:
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleInputChange}
          autoFocus="true"
        />
      </div>
      <div>
        {isValidating && <Loader />}
        {data && data.meals === null ? <p>No recipes found</p> : null}
        {data && data.meals && data.meals.length > 0 && (
          <div>
            {data.meals.map((recipe) => (
              <div key={recipe.idMeal}>
                <h2>{recipe.strMeal}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
