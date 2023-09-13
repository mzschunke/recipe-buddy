"use client";

import useSWR from "swr";
import Link from "next/link";
import RecipeIngredients from "../../../../../components/RecipeInstructions";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function instructionsPage({ params }) {
  const id = params.id;
  const { data: recipe, error } = useSWR(`/api/recipes/${id}`, fetcher);

  if (error) return <p>Error: {error.message}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <>
      <Link href={`/recipes/${id}`}>Go back</Link>
      <RecipeIngredients recipe={recipe} />
    </>
  );
}
