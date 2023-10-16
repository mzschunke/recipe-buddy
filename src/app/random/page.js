import styles from "./Random.module.css";
import RandomMeal from "../../../components/RandomMeal";
import HomeButton from "../../../components/HomeButton";

export default async function RandomPage() {
  return (
    <>
      <HomeButton />
      <div className={styles["title-container"]}>
        <h2 className={styles["title"]}>Random Recipe</h2>
      </div>
      <RandomMeal />
    </>
  );
}
