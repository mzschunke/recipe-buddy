import RandomMeal from "../../../components/RandomMeal";
import HomeButton from "../../../components/Buttons/HomeButton";
import Navigation from "../../../components/Navigation";
import styles from "./RandomPage.module.css";
export default async function RandomPage() {
  return (
    <>
      <div className={styles["header-container"]}>
        <HomeButton />
        <h1 className={styles["title"]}>Random Recipes</h1>
        <Navigation />
      </div>
      <RandomMeal />
    </>
  );
}
