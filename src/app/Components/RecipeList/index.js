import styles from "./RecipeList.module.css";
import receipts from "./receipts.json";

export default function RecipeList() {
  return (
    <div>
      {receipts.map((recipe) => (
        <div key={recipe.id} className={styles["recipe-card"]}>
          <h2 className={styles.title}>{recipe.title}</h2>
          <img src={recipe.imageUrl} alt={recipe.title} />
        </div>
      ))}
    </div>
  );
}
