import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  strMeal: { type: String, required: true, unique: true },
  strCategory: { type: String, required: true },
  strArea: { type: String, required: true },
  strInstructions: { type: String, required: true },
  strIngredient1: { type: String, required: false },
  strMeasure1: { type: String, required: false },
  strIngredient2: { type: String, required: false },
  strMeasure2: { type: String, required: false },
  strIngredient3: { type: String, required: false },
  strMeasure3: { type: String, required: false },
  strIngredient4: { type: String, required: false },
  strMeasure4: { type: String, required: false },
  strIngredient5: { type: String, required: false },
  strMeasure5: { type: String, required: false },
  strIngredient6: { type: String, required: false },
  strMeasure6: { type: String, required: false },
  strIngredient7: { type: String, required: false },
  strMeasure7: { type: String, required: false },
  strIngredient8: { type: String, required: false },
  strMeasure8: { type: String, required: false },
  strIngredient9: { type: String, required: false },
  strMeasure9: { type: String, required: false },
  strIngredient10: { type: String, required: false },
  strMeasure10: { type: String, required: false },
  strIngredient11: { type: String, required: false },
  strMeasure11: { type: String, required: false },
  strIngredient12: { type: String, required: false },
  strMeasure12: { type: String, required: false },
  strIngredient13: { type: String, required: false },
  strMeasure13: { type: String, required: false },
  strIngredient14: { type: String, required: false },
  strMeasure14: { type: String, required: false },
  strIngredient15: { type: String, required: false },
  strMeasure15: { type: String, required: false },
  strIngredient16: { type: String, required: false },
  strMeasure16: { type: String, required: false },
  strIngredient17: { type: String, required: false },
  strMeasure17: { type: String, required: false },
  strIngredient18: { type: String, required: false },
  strMeasure18: { type: String, required: false },
  strIngredient19: { type: String, required: false },
  strMeasure19: { type: String, required: false },
  strIngredient20: { type: String, required: false },
  strMeasure20: { type: String, required: false },
  ingredients: [
    {
      ingredient: { type: String, required: false },
      measure: { type: String, required: false },
    },
  ],
});

const Recipes =
  mongoose.models.Recipes || mongoose.model("Recipes", recipeSchema);

export default Recipes;
