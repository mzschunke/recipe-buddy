import Link from "next/link";
import Image from "next/image";
import styles from "../recipes/RecipePage.module.css";
import home from "../../../lib/home.png";
import RandomMeal from "../../../components/RandomMeal";
import RandomMealButton from "../../../components/RandomMealButton";

export default async function RandomPage() {
  return (
    <>
      <Link href="/" className={styles["home-button"]}>
        <Image
          src={home}
          style={{ objectFit: "contain" }}
          width={35}
          height={35}
          alt="Picture of my recipes"
        ></Image>
      </Link>
      <RandomMeal />
    </>
  );
}
