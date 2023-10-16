"use client";

import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Form({ formName, defaultData, onSubmit }) {
  const [ingredientFields, setIngredientFields] = useState([]);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (defaultData) {
      setIngredientFields([...defaultData.ingredients]);
    }
  }, [defaultData]);

  const addIngredientField = () => {
    setIngredientFields([...ingredientFields, { ingredient: "", measure: "" }]);
  };

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const imageFile = event.target.image.files[0];
    if (imageFile) {
      formData.append("file", imageFile);
      formData.append("upload_preset", "my-uploads");
      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: formData,
          }
        ).then((response) => response.json());
        formData.append("strMealThumb", response.secure_url);
      } catch (error) {
        error;
      }
    }
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
      <label htmlFor="image" className={styles["label"]}>
        Image:
      </label>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
        className={styles["input-image"]}
      />
      {preview && (
        <Image
          src={preview}
          alt={`Preview of recipe`}
          width="200"
          height="200"
        />
      )}
      {defaultData && (
        <Image
          src={defaultData?.strMealThumb}
          alt={`Preview of recipe`}
          width="200"
          height="200"
        />
      )}
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
          <label htmlFor={`ingredient${index + 1}`}>Ingredient:</label>
          <input
            id={`ingredient${index + 1}`}
            type="text"
            name={`strIngredient${index + 1}`}
            className={styles["input"]}
            value={field.ingredient || ""}
            onChange={(e) => {
              const updatedFields = [...ingredientFields];
              updatedFields[index].ingredient = e.target.value;
              setIngredientFields(updatedFields);
            }}
          />
          <label htmlFor={`measure${index + 1}`}>Measure:</label>
          <input
            type="text"
            name={`strMeasure${index + 1}`}
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
        Add more ingredients...
      </button>
      <button type="submit" className={styles["button"]}>
        {defaultData ? "Update Recipe" : "Add Recipe"}
      </button>
    </form>
  );
}
