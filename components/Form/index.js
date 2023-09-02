"use client";

import styles from "./Form.module.css";

export default function Form({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
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
        name="name"
        type="text"
        defaultValue={defaultData?.name}
        className={styles["input"]}
      />
      <label htmlFor="category" className={styles["label"]}>
        Category:
      </label>
      <input
        id="category"
        name="category"
        type="text"
        defaultValue={defaultData?.category}
        className={styles["input"]}
      />
      <label htmlFor="area" className={styles["label"]}>
        Area:
      </label>
      <input
        id="area"
        name="area"
        type="text"
        defaultValue={defaultData?.area}
        className={styles["input"]}
      />
      <label htmlFor="image-url" className={styles["label"]}>
        Image URL:
      </label>
      <input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
        className={styles["input"]}
      />

      <label htmlFor="instructions" className={styles["label"]}>
        Instructions
      </label>
      <textarea
        name="instructions"
        id="instructions"
        cols="30"
        rows="10"
        defaultValue={defaultData?.instructions}
        className={styles["textarea"]}
      ></textarea>
      <button type="submit" className={styles["button"]}>
        {defaultData ? "Update recipe" : "Add recipe"}
      </button>
    </form>
  );
}
