import styles from "./RecipeInstructions.module.css";

export default function RecipeInstructions({ recipe, customStyles }) {
  return (
    <section
      className={`${styles["instructions-container"]} ${customStyles?.container}`}
    >
      <h3 className={styles["title"]}>Instructions:</h3>
      <p className={styles["text-container"]}>{recipe.strInstructions}</p>
    </section>
  );
}
