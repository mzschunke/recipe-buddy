import Swal from "sweetalert2";

async function addRecipeToDatabase(recipe) {
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

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    if (!response.ok) {
      Swal.fire({
        text: "Failed to add the recipe to your favorites",
        icon: "error",
      });
      throw new Error("Failed to add recipe to the database");
    } else {
      Swal.fire({
        text: "Recipe has been added to your favorites",
        icon: "success",
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export const handleAddRecipeToDatabase = async (recipe) => {
  await addRecipeToDatabase(recipe);
};
