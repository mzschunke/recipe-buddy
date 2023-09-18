import styles from "./RecipeIngredients.module.css";

export default function RecipeIngredients({ recipe, customStyles }) {
  const ingredientProperties = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientProperties.push({ ingredient, measure });
    }
  }
  return (
    <div
      className={`${styles["ingredients-container"]} ${customStyles?.container}`}
    >
      <h3 className={`${styles["title"]} ${customStyles?.title}`}>
        Ingredients:
      </h3>
      <section
        className={`${styles["ingredients-container2"]} ${customStyles?.container2}`}
      >
        <ul>
          {ingredientProperties.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
