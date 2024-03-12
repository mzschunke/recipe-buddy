import { ProtectedRoute } from "../../../components/ProtectedRoute";
import { Fallback } from "../../../components/Fallback";
import HomeButton from "../../../components/Buttons/HomeButton";
import Navigation from "../../../components/Navigation";
import ProfileOverview from "../../../components/ProfileOverview";
import styles from "./ProfilePage.module.css";

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
