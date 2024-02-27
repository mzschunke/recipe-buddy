"use client";

import styles from "./ProfileOverview.module.css";
import Image from "next/image";
import Chef from "../../lib/chef.png";
import { useSession } from "next-auth/react";
import { handleDeleteAccount } from "../../utilities/async/user/delete-account";

export default function ProfileOverview() {
  const { data: session } = useSession();
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
              style={{
                borderRadius: "50%",
                border: "3px solid lightsalmon",
                padding: "2px",
              }}
            />
          </div>
          <div className={styles["profile-info"]}>
            <p className={styles["profile-name"]}>
              Username: {session.user.name}
            </p>
            <p className={styles["profile-email"]}>
              E-Mail: {session.user.email}
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
