"use client";

import styles from "./ProfileOverview.module.css";
import Image from "next/image";
import avatar from "../../lib/avatar.png";
import { useSession } from "next-auth/react";

export default function ProfileOverview() {
  const { data: session } = useSession();
  if (session)
    return (
      <>
        <h1 className={styles["headline"]}>Account Info</h1>
        <div className={styles["profile-overview"]}>
          <div className={styles["profile-picture"]}>
            <Image
              src={session?.user?.image || avatar}
              width={50}
              height={50}
              alt="Picture of current user"
            />
          </div>
          <div className={styles["profile-info"]}>
            <p className={styles["profile-name"]}>
              Username: {session.user.name}
            </p>
            <p className={styles["profile-email"]}>
              E-mail: {session.user.email}
            </p>
            <button className={styles["delete-profile"]}>
              Account löschen
            </button>
          </div>
        </div>
      </>
    );
}
