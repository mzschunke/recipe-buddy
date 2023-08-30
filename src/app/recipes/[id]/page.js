"use client";

import RecipeCard from "../../../../components/RecipeCard";

export default function RecipePage({ params }) {
  return <RecipeCard id={params.id} />;
}
