"use client";

import { useSession } from "next-auth/react";
import useSWR from "swr";
import Image from "next/image";
import { handleDeleteAccount } from "../../utilities/async/user/delete-account";
import Chef from "../../lib/chef.png";
import styles from "./ProfileOverview.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProfileOverview() {
  const { data: session } = useSession();
  const { data: recipes } = useSWR("/api/recipes", fetcher);
  const userID = session?.user?.id;

  if (session)
    return (
      <>
        <div className={styles["profile-overview"]}>
          <div className={styles["profile-picture"]}>
            <Image
              src={session?.user?.image || Chef}
              width={65}
              height={65}
              alt="Picture of current user"
            />
          </div>
          <div className={styles["profile-info"]}>
            <p>Username: {session.user.name}</p>
            <p>E-Mail: {session.user.email}</p>
            <p>
              Total saved recipes: {recipes?.length > 0 ? recipes?.length : "0"}
            </p>
            <button
              className={styles["delete-profile"]}
              onClick={() => handleDeleteAccount(userID)}
            >
              Delete Account
            </button>
          </div>
        </div>
      </>
    );
}
