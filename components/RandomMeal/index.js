"use client";

import { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import styles from "./RandomMeal.module.css";
import Loader from "../Loader";
import Modal from "../Modal";
import { Button } from "@mui/material";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { handleAddToFavorites } from "../../utilities/favorite";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

export default function RandomMeal({ recipe }) {
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
    const image = data.meals[0].strMealThumb;

    return (
      <>
        <div className={styles["random-recipe-container"]}>
          <div className={styles["product-card"]}>
            <Image
              src={image}
              width={200}
              height={200}
              alt="Picture of a random meal"
            />
            <button
              onClick={() => handleAddToFavorites(recipe)}
              className={styles["button"]}
            >
              <BsFillSuitHeartFill className={styles["heart-icon"]} size={50} />
            </button>
            <h3>{recipe.strMeal}</h3>
            <p>Category: {recipe.strCategory}</p>
            <p>Area: {recipe.strArea}</p>
            <Modal recipe={recipe} />
          </div>
          <Button variant="contained" onClick={handleRefresh}>
            Another Meal
          </Button>
        </div>
      </>
    );
  }
  return null;
}
