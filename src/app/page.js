"use client";

import Search from "../../components/Search";
import styles from "./Homepage.module.css";
import RecipesButton from "../../components/MyRecipesButton";
import RandomMealButton from "../../components/RandomMealButton";
import SignOutButton from "../../components/SignOutButton";
import SignInButton from "../../components/SignInButton";

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
