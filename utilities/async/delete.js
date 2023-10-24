import Swal from "sweetalert2";

async function deleteRecipeDB(recipe, id) {
  await fetch(`/api/recipes/${id}`, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          text: "Recipe has been deleted.",
          icon: "warning",
        });
      } else {
        console.error("Failed to delete recipe.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export const handleDeleteRecipe = async (recipe, id) => {
  await deleteRecipeDB(recipe, id);
};
