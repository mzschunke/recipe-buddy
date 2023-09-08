"use client";

import styles from "./Form.module.css";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  const { status } = await response.json();
  console.log("Status:", status);
}

export default function Form({ onSubmit, formName, defaultData }) {
  const { trigger } = useSWRMutation("/api/recipes", sendRequest);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    await trigger(data);
    router.push("/recipes");
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
      <label htmlFor="image-url" className={styles["label"]}>
        Image URL:
      </label>
      <input
        id="image-url"
        name="strMealThumb"
        type="text"
        defaultValue={defaultData?.strMealThumb}
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
