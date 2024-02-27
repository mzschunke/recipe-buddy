"use client";

import { useSession } from "next-auth/react";
import Navigation from "../../../components/Navigation";
import RecipesButton from "../../../components/Buttons/MyRecipesButton";
import RandomMealButton from "../../../components/Buttons/RandomMealButton";
import Search from "../../../components/Search";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const { data: session } = useSession({ required: true });
  if (session)
    return (
      <>
        <div className={styles["header-container"]}>
          <h1 className={styles["title"]}>Recipe Buddy</h1>
          <Navigation />
        </div>
        <p className={styles["welcome-message"]}>
          Welcome, {session.user.name}!
        </p>
        <div className={styles["menu-container"]}>
          <RecipesButton />
          <RandomMealButton />
        </div>
        <Search />
      </>
    );
}
