"use client";

import Search from "../../components/Search";
import styles from "./Homepage.module.css";
import RecipesButton from "../../components/Buttons/MyRecipesButton";
import RandomMealButton from "../../components/Buttons/RandomMealButton";
import SignOutButton from "../../components/Buttons/SignOutButton";
import SignInButton from "../../components/Buttons/SignInButton";

export default function Home() {
  return (
    <>
      <div className={styles["header-container"]}>
        <h1 className={styles["title"]}>Recipe Buddy</h1>
      </div>
      {/* <SignInButton />
      <SignOutButton /> */}
      <div className={styles["menu-container"]}>
        <RecipesButton />
        <RandomMealButton />
      </div>
      <Search />
    </>
  );
}
