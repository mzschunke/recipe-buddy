import styles from "./RecipeIngredients.module.css";

export default function RecipeIngredients({ recipe }) {
  const ingredientProperties = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientProperties.push({ ingredient, measure });
    }
  }
  return (
    <section className={styles["ingredients-container"]}>
      <h3>Ingredients:</h3>
      <ul className={styles["ingredients-listr"]}>
        {ingredientProperties.map((item, index) => (
          <li key={index}>
            {item.measure} {item.ingredient}
          </li>
        ))}
      </ul>
    </section>
  );
}
