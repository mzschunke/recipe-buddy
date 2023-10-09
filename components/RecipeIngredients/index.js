import styles from "./RecipeIngredients.module.css";

export default function RecipeIngredients({ recipe, customStyles }) {
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
          {recipe.ingredients.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
