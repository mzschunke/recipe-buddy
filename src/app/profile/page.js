import { ProtectedRoute } from "../../../components/ProtectedRoute";
import { Fallback } from "../../../components/Fallback";
import ProfileOverview from "../../../components/ProfileOverview";
import HomeButton from "../../../components/Buttons/HomeButton";
import styles from "./ProfilePage.module.css";
import Navigation from "../../../components/Navigation";

export default function ProfilePage() {
  return (
    <ProtectedRoute fallback={<Fallback />}>
      <div className={styles["header-container"]}>
        <HomeButton />
        <h1 className={styles["title"]}>Account Info</h1>
        <Navigation />
      </div>
      <ProfileOverview />
    </ProtectedRoute>
  );
}
