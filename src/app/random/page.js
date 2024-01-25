import RandomMeal from "../../../components/RandomMeal";
import HomeButton from "../../../components/Buttons/HomeButton";

export default async function RandomPage() {
  return (
    <>
      <HomeButton />
      <RandomMeal />
    </>
  );
}
