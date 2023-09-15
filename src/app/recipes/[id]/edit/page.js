"use client";

import Link from "next/link";
import useSWR from "swr";
import Form from "../../../../../components/Form";
import { useRouter } from "next/navigation";
import styles from "./Edit.module.css";
import Loader from "../../../../../components/Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditPage({ params }) {
  const router = useRouter();
  const id = params.id;
  const { data, error, isLoading } = useSWR(`/api/recipes/${id}`, fetcher);

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
  if (isLoading) return <Loader />;

  return (
    <>
      <div className={styles["header-container"]}>
        <h2>Edit Recipe</h2>
        <Link href={`/recipes/${id}`} passHref legacyBehavior>
          back
        </Link>
      </div>
      {data ? (
        <Form
          onSubmit={editRecipe}
          formName={"edit-recipe"}
          defaultData={data}
        />
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}
