import Swal from "sweetalert2";

async function editRecipeDB(recipe, id) {
  try {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientName = recipe[`strIngredient${i}`];
      const ingredientMeasure = recipe[`strMeasure${i}`];
      if (ingredientName && ingredientMeasure) {
        ingredients.push({
          ingredient: ingredientName,
          measure: ingredientMeasure,
        });
      }
    }
    const recipeData = {
      strMeal: recipe.strMeal,
      strCategory: recipe.strCategory,
      strArea: recipe.strArea,
      strMealThumb: recipe.strMealThumb,
      strInstructions: recipe.strInstructions,
      ingredients: ingredients,
    };

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
    Swal.fire({
      text: "Recipe edited successfully",
      icon: "success",
    });
  } catch (error) {
    console.error(error);
  }
}

export const handleEditRecipe = async (recipe, id) => {
  await editRecipeDB(recipe, id);
};
