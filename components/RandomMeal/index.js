"use client";

import Image from "next/image";
import useSWR from "swr";
import styles from "./RandomMeal.module.css";
import Loader from "../Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

export default function RandomMeal() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

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
          <h2>Random Meal</h2>
          <p>{randomMeal.strMeal}</p>
          <Image
            src={image}
            width={200}
            height={200}
            alt="Picture of a random meal"
          />
        </div>
      </>
    );
  }
  return null;
}
