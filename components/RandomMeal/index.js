"use client";

import { useState } from "react";
import useSWR from "swr";
import styles from "./RandomMeal.module.css";
import Loader from "../Loader";
import { Button } from "@mui/material";
import RecipeCard from "../RecipeCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

export default function RandomMeal() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { data, error, isLoading } = useSWR(
    `${URL}?key=${refreshKey}`,
    fetcher
  );

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data && isLoading) {
    return <Loader />;
  }

  if (data) {
    const { meals } = data;
    const recipe = meals[0];

    return (
      <>
        <div className={styles["random-recipe-container"]}>
          <RecipeCard recipe={recipe} />
          <button className={styles["button"]} onClick={handleRefresh}>
            Next Recipe 🪄
          </button>
        </div>
      </>
    );
  }
  return null;
}
