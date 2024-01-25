"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import RecipesButton from "../../../components/MyRecipesButton";
import RandomMealButton from "../../../components/RandomMealButton";
import Search from "../../../components/Search";
import styles from "./Login.module.css";
import SignOutButton from "../../../components/SignOutButton";

export default function Login() {
  const { data: session } = useSession({ required: true });
  console.log(session);
  if (session)
    return (
      <>
        <div className={styles["profile-container"]}>
          <Image
            src={session.user.image}
            width={50}
            height={50}
            alt="Picture of current user"
          />
          <SignOutButton />
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
