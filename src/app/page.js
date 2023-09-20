"use client";

import { useState } from "react";
import Search from "../../components/Search";
import styles from "./Homepage.module.css";
import RecipesButton from "../../components/MyRecipesButton";
import RandomMealButton from "../../components/RandomMealButton";
import RandomMeal from "../../components/RandomMeal";

export default function Home() {
  const [showRandomMeal, setShowRandomMeal] = useState(false);

  const handleRandomMealButtonClick = () => {
    setShowRandomMeal(!showRandomMeal);
  };

  return (
    <>
      <div className={styles["header-container"]}>
        <h1 className={styles["title"]}>Recipe Buddy</h1>
      </div>
      <div className={styles["menu-container"]}>
        <RecipesButton />
        <RandomMealButton onClick={handleRandomMealButtonClick} />
      </div>
      <Search />
      {showRandomMeal && <RandomMeal />}
    </>
  );
}
