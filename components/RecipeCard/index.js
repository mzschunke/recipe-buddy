import recipes from "../../src/app/recipes/recipes.json";
import Link from "next/link";
import styles from "./RecipeCard.module.css";

export default function RecipeCard({ id }) {
  const product = recipes.find((food) => food.id === parseInt(id));
  //console.log("Chosen Product is:", product);
  return (
    <>
      <div className={styles["product-container"]}>
        <h2>{product.title}</h2>
        <section className={styles["product-card"]}>
          Calories: {product.kcal} kcal
        </section>
      </div>
      <Link href="/recipes">Go back</Link>
    </>
  );
}
