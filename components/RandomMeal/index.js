"use client";

import { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import styles from "./RandomMeal.module.css";
import Loader from "../Loader";
import Modal from "../Modal";
import { Button } from "@mui/material";

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
    const randomMeal = meals[0];
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
            <h3>{randomMeal.strMeal}</h3>
            <p>Category: {randomMeal.strCategory}</p>
            <p>Area: {randomMeal.strArea}</p>
            <Modal recipe={randomMeal} />
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
