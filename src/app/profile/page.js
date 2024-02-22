import { ProtectedRoute } from "../../../components/ProtectedRoute";
import { Fallback } from "../../../components/Fallback";
import ProfileOverview from "../../../components/ProfileOverview";
import HomeButton from "../../../components/Buttons/HomeButton";

export default function ProfilePage() {
  return (
    <ProtectedRoute fallback={<Fallback />}>
      <HomeButton />
      <ProfileOverview />
    </ProtectedRoute>
  );
}
