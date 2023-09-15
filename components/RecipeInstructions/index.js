import styles from "./RecipeInstructions.module.css";

export default function RecipeInstructions({ recipe }) {
  return (
    <section className={styles["instructions-container"]}>
      <h3>Instructions:</h3>
      <p>{recipe.strInstructions}</p>
    </section>
  );
}
