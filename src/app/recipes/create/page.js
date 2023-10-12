"use client";

import Form from "../../../../components/Form";
import { useRouter } from "next/navigation";
import styles from "./Create.module.css";
import BackButton from "../../../../components/BackButton";
import { handleAddRecipeToDatabase } from "../../../../utilities/async/create";

export default function CreateRecipe() {
  const router = useRouter();
  async function addRecipe(recipe) {
    await handleAddRecipeToDatabase(recipe);
    router.push("/recipes");
  }

  return (
    <>
      <BackButton />
      <h2 className={styles["title"]}>Add Recipe:</h2>
      <Form onSubmit={addRecipe} formName={"add-recipe"} requestType="POST" />
    </>
  );
}
