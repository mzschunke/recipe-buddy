import styles from "./RecipeList.module.css";
import receipts from "./receipts.json";
import Link from "next/link";

export default function RecipeList() {
  return (
    <div className={styles["recipe-container"]}>
      {receipts.map(({ title, id }) => (
        <div key={id} className={styles["recipe-card"]}>
          <h2 className={styles.title}>{title}</h2>
          <Link href={`/recipes/${id}`}>Link</Link>
        </div>
      ))}
      <Link href="/">Go home</Link>
    </div>
  );
}
