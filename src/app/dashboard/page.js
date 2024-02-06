"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import RecipesButton from "../../../components/Buttons/MyRecipesButton";
import RandomMealButton from "../../../components/Buttons/RandomMealButton";
import Search from "../../../components/Search";
import styles from "./Login.module.css";
import SignOutButton from "../../../components/Buttons/SignOutButton";
import avatar from "../../../lib/avatar.png";

export default function Dashboard() {
  const { data: session } = useSession({ required: true });
  if (session)
    return (
      <>
        <div className={styles["profile-container"]}>
          <Image
            src={session?.user?.image || avatar}
            width={50}
            height={50}
            alt="Picture of current user"
            style={{ borderRadius: "50%", border: "2px solid lightseagreen" }}
          />
          <SignOutButton />
        </div>
        <div className={styles["header-container"]}>
          <h1 className={styles["title"]}>Recipe Buddy</h1>
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
