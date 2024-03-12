"use client";

import { useSession } from "next-auth/react";
import Dashboard from "./dashboard/page";
import SignInButton from "../../components/Buttons/SignInButton";
import RecipesButton from "../../components/Buttons/MyRecipesButton";
import RandomMealButton from "../../components/Buttons/RandomMealButton";
import Search from "../../components/Search";
import styles from "./Homepage.module.css";

export default function Home() {
  const { data: session } = useSession();
  if (session) return <Dashboard />;
  return (
    <>
      <div className={styles["header-container"]}>
        <h1 className={styles["header"]}>Recipe Buddy</h1>
        <div className={styles["button-container"]}>
          <SignInButton />
        </div>
      </div>
      <div className={styles["menu-container"]}>
        <RecipesButton />
        <RandomMealButton />
      </div>
      <Search />
    </>
  );
}
