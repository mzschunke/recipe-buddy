import styles from "./RecipeInstrucions.module.css";
import { useState } from "react";

export default function RecipeIngredients({ recipe }) {
  const ingredientProperties = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientProperties.push({ ingredient, measure });
    }
  }

  const [showIngredients, setShowIngredients] = useState(false);

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  return (
    <>
      <section className={styles["instructions-container"]}>
        <h3>Ingredients:</h3>
        <ul>
          {ingredientProperties.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles["instructions-container"]}>
        <h4>Instructions:</h4>
        <p>{recipe.strInstructions}</p>
      </section>
      <h3>Ingredients:</h3>
      <button onClick={toggleIngredients}>
        {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
      </button>
      {showIngredients && (
        <ul>
          {ingredientProperties.map((item, index) => (
            <li key={index}>
              {item.measure} {item.ingredient}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
