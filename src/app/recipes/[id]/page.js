"use client";

import recipes from "../recipes.json";
import Link from "next/link";
import RecipeCard from "../../../../components/RecipeCard";
import { useSearchParams } from "next/navigation";

console.log("recipes title:", recipes[0].title);
console.log("Recipes:", recipes);

export default function RecipePage({ params }) {
  console.log("ID:", params.id);
  return <RecipeCard id={params.id} />;
}
