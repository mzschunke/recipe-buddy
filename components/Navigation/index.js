"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import ProfileButton from "../Buttons/ProfileButton";
import SignOutButton from "../Buttons/SignOutButton";
import Chef from "../../lib/chef.png";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const { data: session } = useSession({ required: true });
  const [showDropdown, setShowDropdown] = useState(false);
  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["column-container"]}>
        <div className={styles["dropdown"]} onClick={toggleDropdown}>
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
          {showDropdown && (
            <div
              className={styles["dropdown-content"]}
              onClick={toggleDropdown}
            >
              <ProfileButton />
              <SignOutButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
