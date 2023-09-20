import Image from "next/image";
import styles from "./RandomMealButton.module.css";
import dices from "../../lib/dices.png";

export default function RandomMealButton() {
  return (
    <button className={styles["button"]}>
      <Image
        src={dices}
        style={{ objectFit: "contain" }}
        width={39}
        height={39}
        alt="Picture of dices"
      ></Image>
      <p className={styles["link-text"]}>Random meal</p>
    </button>
  );
}
