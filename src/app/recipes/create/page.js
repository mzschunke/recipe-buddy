"use client";

import Form from "../../../../components/Form";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import styles from "../RecipeList.module.css";
import Link from "next/link";

async function sendRequest(url, { arg }) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
  const data = await response.json();
  return data;
}

export default function CreateRecipe() {
  const router = useRouter();
  const { trigger } = useSWRMutation("/api/recipes", sendRequest);
  async function addRecipe(recipe) {
    await trigger(recipe);
    router.push("/recipes");
  }
  return (
    <>
      <h2 className={styles["title"]}>Add Recipe:</h2>
      <Link href="/recipes" className={styles["back-button"]}>
        Go back
      </Link>
      <Form onSubmit={addRecipe} formName={"add-recipe"} requestType="POST" />
    </>
  );
}
