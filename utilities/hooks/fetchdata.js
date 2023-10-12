import { useEffect, useState } from "react";

function useRecipeData(id) {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          const response = await fetch(`/api/recipes/${id}`);
          if (response.ok) {
            const recipeData = await response.json();
            setCurrentRecipe(recipeData);
          } else {
            console.error("Failed to fetch recipe data.");
          }
        } catch (error) {
          console.error("Error fetching recipe data:", error);
        }
      }
    };

    fetchData();
  }, [id]);

  return currentRecipe;
}

export default useRecipeData;
