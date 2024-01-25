import styles from "./FavoriteButton.module.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { handleAddToFavorites } from "../../../utilities/async/favorite.js";

export default function FavoriteButton({ recipe }) {
  return (
    <>
      <button
        onClick={() => handleAddToFavorites(recipe)}
        className={styles["button"]}
      >
        <BsFillSuitHeartFill className={styles["heart-icon"]} size={50} />
      </button>
    </>
  );
}
