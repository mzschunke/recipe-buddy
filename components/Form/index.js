"use client";

import styles from "./Form.module.css";
import { useState, useEffect } from "react";

export default function Form({ formName, defaultData, onSubmit }) {
  const [ingredientFields, setIngredientFields] = useState([]);

  useEffect(() => {
    if (defaultData) {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = defaultData[`strIngredient${i}`];
        const measure = defaultData[`strMeasure${i}`];
        if (
          ingredient !== "" &&
          ingredient !== null &&
          ingredient !== undefined &&
          measure !== "" &&
          measure !== null &&
          measure !== undefined
        ) {
          ingredients.push({ ingredient, measure });
        }
      }
      setIngredientFields(ingredients);
    }
  }, [defaultData]);

  const addIngredientField = () => {
    setIngredientFields([...ingredientFields, { ingredient: "", measure: "" }]);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <form
      aria-labelledby={formName}
      onSubmit={handleSubmit}
      className={styles["form-container"]}
      autoComplete="on"
    >
      <label htmlFor="name" className={styles["label"]}>
        Name of recipe:
      </label>
      <input
        id="name"
        name="strMeal"
        type="text"
        defaultValue={defaultData?.strMeal}
        className={styles["input"]}
        required={true}
      />
      <label htmlFor="category" className={styles["label"]}>
        Category:
      </label>
      <input
        id="category"
        name="strCategory"
        type="text"
        defaultValue={defaultData?.strCategory}
        className={styles["input"]}
        required={true}
      />
      <label htmlFor="area" className={styles["label"]}>
        Area:
      </label>
      <input
        id="area"
        name="strArea"
        type="text"
        defaultValue={defaultData?.strArea}
        className={styles["input"]}
        required={true}
      />
      <label htmlFor="instructions" className={styles["label"]}>
        Instructions:
      </label>
      <textarea
        name="strInstructions"
        id="instructions"
        cols="30"
        rows="5"
        defaultValue={defaultData?.strInstructions}
        className={styles["textarea"]}
        required={true}
      ></textarea>
      {ingredientFields.map((field, index) => (
        <div key={index} className={styles["ingredient-container"]}>
          <label htmlFor={`ingredient${index + 1}`} className={styles["label"]}>
            {`Ingredient ${index + 1}:`}
          </label>
          <input
            id={`ingredient${index + 1}`}
            name={`strIngredient${index + 1}`}
            type="text"
            className={styles["input"]}
            value={field.ingredient || ""}
            onChange={(e) => {
              const updatedFields = [...ingredientFields];
              updatedFields[index].ingredient = e.target.value;
              setIngredientFields(updatedFields);
            }}
          />
          <label htmlFor={`measure${index + 1}`} className={styles["label"]}>
            {`Measure ${index + 1}:`}
          </label>
          <input
            id={`measure${index + 1}`}
            name={`strMeasure${index + 1}`}
            type="text"
            className={styles["input"]}
            value={field.measure || ""}
            onChange={(e) => {
              const updatedFields = [...ingredientFields];
              updatedFields[index].measure = e.target.value;
              setIngredientFields(updatedFields);
            }}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addIngredientField}
        className={styles["more-button"]}
      >
        add more ingredients...
      </button>
      <button type="submit" className={styles["button"]}>
        {defaultData ? "Update recipe" : "Add recipe"}
      </button>
    </form>
  );
}
