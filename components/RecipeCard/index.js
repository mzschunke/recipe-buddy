import styles from "./RecipeCard.module.css";
import FavoriteButton from "../Buttons/FavoriteButton";
import Modal from "../Modal";
import Image from "next/image";
import sample from "../../lib/sample.jpg";

export default function RecipeCard({ recipe }) {
  return (
    <div className={styles["product-card"]}>
      {recipe.strMealThumb ? (
        <Image
          src={recipe.strMealThumb}
          width={250}
          height={250}
          style={{ objectFit: "contain" }}
          alt={recipe.strMeal}
        />
      ) : (
        <Image
          src={sample}
          width={250}
          height={250}
          style={{ objectFit: "contain" }}
          alt={recipe.strMeal}
        />
      )}
      <FavoriteButton recipe={recipe} />
      <h3 className={styles["title"]}>{recipe.strMeal}</h3>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <Modal recipe={recipe} />
    </div>
  );
}
