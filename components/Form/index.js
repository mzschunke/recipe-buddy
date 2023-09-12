"use client";

import styles from "./Form.module.css";

export default function Form({ formName, defaultData, onSubmit }) {
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
      />
      <label htmlFor="instructions" className={styles["label"]}>
        Instructions
      </label>
      <textarea
        name="strInstructions"
        id="instructions"
        cols="30"
        rows="10"
        defaultValue={defaultData?.strInstructions}
        className={styles["textarea"]}
      ></textarea>
      <button type="submit" className={styles["button"]}>
        {defaultData ? "Update recipe" : "Add recipe"}
      </button>
    </form>
  );
}
