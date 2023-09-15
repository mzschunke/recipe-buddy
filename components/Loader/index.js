import { RingLoader } from "react-spinners";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles["loader"]}>
      <RingLoader
        color={"rgb(39, 100, 176)"}
        loading={true}
        size={25}
        aria-label="Loading Spinner"
      />
    </div>
  );
}
