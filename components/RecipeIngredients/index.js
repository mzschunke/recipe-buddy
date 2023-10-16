import styles from "./RecipeIngredients.module.css";

export default function RecipeIngredients({ recipe, customStyles }) {
  const ingredientsAndMeasures = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && measure) {
      ingredientsAndMeasures.push({ ingredient, measure });
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
        className={`${styles["text-container"]} ${customStyles?.container2}`}
      >
        {recipe.ingredients ? (
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {ingredientsAndMeasures.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
