"use client";

import Image from "next/image";
import Link from "next/link";
import dices from "../../../lib/dices.png";
import styles from "./RandomMealButton.module.css";

export default function RandomMealButton() {
  return (
    <Link href="/random" className={styles["button"]}>
      <Image
        src={dices}
        style={{ objectFit: "contain" }}
        width={70}
        height={70}
        alt="Picture of dices"
      ></Image>
      <p className={styles["link-text"]}>Random Recipe</p>
    </Link>
  );
}
