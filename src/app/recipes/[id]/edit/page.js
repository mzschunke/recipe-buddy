"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import useSWR from "swr";
import Form from "../../../../../components/Form";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditPage() {
  const router = useRouter();
  const pathname = usePathname();
  const pathID = pathname.match(/\d/g).join("");
  const { data, isLoading, error } = useSWR(`/api/recipes/`, fetcher);
  const [newRecipe, setNewRecipe] = useState(null);

  useEffect(() => {
    if (data) {
      const recipe = data.find((recipe) => recipe.idMeal === pathID);
      setNewRecipe(recipe);
    }
  }, [data, pathID]);

  async function editRecipe(data) {
    try {
      const response = await fetch(`/api/recipes/${pathID}`, {
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
      router.push(`/recipes/${pathID}`);
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading || error) return <h2>Loading...</h2>;

  return (
    <>
      <h2 id="edit-recipe">Edit Recipe</h2>
      <Link href={`/recipes/${pathID}`} passHref legacyBehavior>
        back
      </Link>
      {newRecipe && (
        <Form
          onSubmit={editRecipe}
          formName={"edit-recipe"}
          defaultData={newRecipe}
        />
      )}
    </>
  );
}
