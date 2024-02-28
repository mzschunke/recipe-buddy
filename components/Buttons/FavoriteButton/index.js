import styles from "./FavoriteButton.module.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { handleAddToFavorites } from "../../../utilities/async/favorite.js";
import { useSession } from "next-auth/react";

export default function FavoriteButton({ recipe }) {
  const { data: session } = useSession();
  const userID = session?.user?.id;
  if (!session) return null;
  return (
    <>
      <button
        onClick={() => handleAddToFavorites(recipe, userID)}
        className={styles["button"]}
      >
        <BsFillSuitHeartFill className={styles["heart-icon"]} size={50} />
      </button>
    </>
  );
}
