"use client";

import {} from "next/navigation";
import Link from "next/link";
import useSWR from "swr";
import Form from "../../../../../components/Form";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditPage({ params }) {
  const router = useRouter();
  const id = params.id;
  const { data, isLoading, error } = useSWR(`/api/recipes/`, fetcher);
  const [newRecipe, setNewRecipe] = useState(null);

  useEffect(() => {
    if (data) {
      const recipe = data.find((recipe) => recipe._id === id);
      setNewRecipe(recipe);
    }
  }, [data, id]);

  async function editRecipe(data) {
    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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

  if (isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-recipe">Edit Recipe</h2>

      {newRecipe && (
        <Form
          onSubmit={editRecipe}
          formName={"edit-recipe"}
          defaultData={newRecipe}
        />
      )}
      <Link href={`/recipes/${id}`} passHref legacyBehavior>
        back
      </Link>
    </>
  );
}
