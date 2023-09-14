import styles from "./RecipeInstructions.module.css";

export default function RecipeInstructions({ recipe }) {
  return (
    <section className={styles["instructions-container"]}>
      <h4>Instructions:</h4>
      <p>{recipe.strInstructions}</p>
    </section>
  );
}
