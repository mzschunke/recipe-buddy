"use client";

import Search from "../../components/Search";
import styles from "./Homepage.module.css";
import RecipesButton from "../../components/Buttons/MyRecipesButton";
import RandomMealButton from "../../components/Buttons/RandomMealButton";
import SignOutButton from "../../components/Buttons/SignOutButton";
import SignInButton from "../../components/Buttons/SignInButton";
import { useSession } from "next-auth/react";
import Dashboard from "./dashboard/page";

export default function Home() {
  const { data: session } = useSession();
  if (session) return <Dashboard />;
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
