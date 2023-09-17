"use client";

import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import styles from "./Search.module.css";
import Loader from "../Loader";
import Image from "next/image";
import sample from "../../lib/sample.jpg";
import { BsFillSuitHeartFill } from "react-icons/bs";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export default function Search() {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isValidating } = useSWR(
    searchQuery ? `${URL}${searchQuery}` : null,
    fetcher
  );

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  async function addToFavorites(recipe) {
    try {
      const recipeData = {
        strMeal: recipe.strMeal,
        strCategory: recipe.strCategory,
        strArea: recipe.strArea,
        strMealThumb: recipe.strMealThumb,
        strInstructions: recipe.strInstructions,
      };

      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      if (!response.ok) {
        throw new Error("Failed to add recipe");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleAddToFavorites = async (recipe) => {
    await addToFavorites(recipe);
    router.push("/recipes");
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
                  <button
                    onClick={() => handleAddToFavorites(recipe)}
                    className={styles["button"]}
                  >
                    <BsFillSuitHeartFill
                      className={styles["heart-icon"]}
                      size={50}
                    />
                  </button>
                  <h2 className={styles["title"]}>{recipe.strMeal}</h2>
                  <p>Category: {recipe.strCategory}</p>
                  <p>Area: {recipe.strArea}</p>
                  <button
                    onClick={toggleDetails}
                    className={styles["details-button"]}
                  >
                    Show details
                  </button>
                  {showDetails && (
                    <div className={styles["details-container"]}>
                      <p>{recipe.strInstructions}</p>
                      <button onClick={toggleDetails}>close</button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
