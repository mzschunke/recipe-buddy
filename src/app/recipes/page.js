import styles from "./RecipeList.module.css";
import Link from "next/link";
import RandomMeal from "../../../components/RandomMeal";
import RecipeCard from "../../../components/RecipeCard";

export default async function RecipeList() {
  return (
    <>
      <Link href="/">Go Home</Link>
      <RecipeCard />
    </>
  );
}
