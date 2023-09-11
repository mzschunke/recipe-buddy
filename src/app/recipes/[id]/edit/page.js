"use client";

import Link from "next/link";
import useSWR from "swr";
import Form from "../../../../../components/Form";
import { useRouter } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditPage({ params }) {
  const router = useRouter();
  const id = params.id;
  const { data, error } = useSWR(`/api/recipes/${id}`, fetcher);

  async function editRecipe(recipeData) {
    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      console.log("Recipe edited successfully!");
      router.push(`/recipes/${id}`);
    } catch (error) {
      console.error(error);
    }
  }
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <h2 id="edit-recipe">Edit Recipe</h2>
      {data ? (
        <Form
          onSubmit={editRecipe}
          formName={"edit-recipe"}
          defaultData={data}
        />
      ) : (
        <p>No data available</p>
      )}
      <Link href={`/recipes/${id}`} passHref legacyBehavior>
        back
      </Link>
    </>
  );
}
