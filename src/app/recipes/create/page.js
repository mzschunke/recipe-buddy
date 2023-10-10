"use client";

import Form from "../../../../components/Form";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import styles from "./Create.module.css";
import BackButton from "../../../../components/BackButton";

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
      <BackButton />
      <h2 className={styles["title"]}>Add Recipe:</h2>
      <Form onSubmit={addRecipe} formName={"add-recipe"} requestType="POST" />
    </>
  );
}
