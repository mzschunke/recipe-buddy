"use client";

import { useState } from "react";
import useSWR from "swr";
import styles from "./Search.module.css";
import Loader from "../Loader";
import Image from "next/image";

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
        {data && data.meals === null ? (
          <div className={styles["no-result"]}>No recipes found</div>
        ) : null}
        {data && data.meals && data.meals.length > 0 && (
          <div className={styles["list-container"]}>
            <ul className={styles["product-list"]}>
              {data.meals.map((recipe) => (
                <li key={recipe.idMeal} className={styles["product-card"]}>
                  {recipe.strMealThumb ? (
                    <Image
                      src={recipe.strMealThumb}
                      width={250}
                      height={250}
                      style={{ objectFit: "contain" }}
                      alt={recipe.strMeal}
                    />
                  ) : (
                    <Image
                      src={sample}
                      width={250}
                      height={250}
                      style={{ objectFit: "contain" }}
                      alt={recipe.strMeal}
                    />
                  )}
                  <h2 className={styles["title"]}>{recipe.strMeal}</h2>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
