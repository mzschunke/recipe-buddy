async function addToFavorites(recipe) {
  try {
    const recipeData = {
      strMeal: recipe.strMeal,
      strCategory: recipe.strCategory,
      strArea: recipe.strArea,
      strMealThumb: recipe.strMealThumb,
      strInstructions: recipe.strInstructions,
    };

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    });

    if (!response.ok) {
      throw new Error("Failed to add recipe");
    }
  } catch (error) {
    console.error(error);
  }
}

export const handleAddToFavorites = async (recipe) => {
  await addToFavorites(recipe);
  alert("Recipe has been added to your favorites");
};
