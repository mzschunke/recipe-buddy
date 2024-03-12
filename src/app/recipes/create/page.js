"use client";

import { useRouter } from "next/navigation";
import { handleAddRecipeToDatabase } from "../../../../utilities/async/create";
import { ProtectedRoute } from "../../../../components/ProtectedRoute";
import { Fallback } from "../../../../components/Fallback";
import BackButton from "../../../../components/Buttons/BackButton";
import Form from "../../../../components/Form";
import styles from "./Create.module.css";

export default function CreateRecipe() {
  const router = useRouter();
  async function addRecipe(recipe) {
    await handleAddRecipeToDatabase(recipe);
    router.push("/recipes");
  }

  return (
    <ProtectedRoute fallback={<Fallback />}>
      <BackButton />
      <h2 className={styles["title"]}>Add Recipe:</h2>
      <Form onSubmit={addRecipe} formName={"add-recipe"} requestType="POST" />
    </ProtectedRoute>
  );
}
