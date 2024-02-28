"use client";

import useSWR from "swr";
import Form from "../../../../../components/Form";
import { useRouter } from "next/navigation";
import styles from "./Edit.module.css";
import Loader from "../../../../../components/Loader";
import BackButton from "../../../../../components/Buttons/BackButton";
import { ProtectedRoute } from "../../../../../components/ProtectedRoute";
import { Fallback } from "../../../../../components/Fallback";
import { handleEditRecipe } from "../../../../../utilities/async/edit";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditPage({ params }) {
  const router = useRouter();
  const id = params.id;
  const { data, error, isLoading } = useSWR(`/api/recipes/${id}`, fetcher);

  async function editRecipe(recipe, id) {
    await handleEditRecipe(recipe, id);
    router.push(`/recipes/${id}`);
  }

  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <Loader />;

  return (
    <ProtectedRoute fallback={<Fallback />}>
      <BackButton />
      <div className={styles["header-container"]}>
        <h2 className={styles["title"]}>Edit Recipe</h2>
      </div>
      {data ? (
        <Form
          onSubmit={(recipe) => editRecipe(recipe, id)}
          formName={"edit-recipe"}
          defaultData={data}
        />
      ) : (
        <p>No data available</p>
      )}
    </ProtectedRoute>
  );
}
