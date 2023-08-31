import mongoose from "mongoose";

const { Schema } = mongoose;

const ingredientSchema = new Schema({
  strIngredient: { type: String, required: true },
  strMeasure: { type: String, required: true },
});

const recipeSchema = new Schema({
  strMeal: { type: String, required: true },
  strCategory: { type: String, required: true },
  strArea: { type: String, required: true },
  strInstructions: { type: String, required: true },
  strMealThumb: { type: String, required: true },
  strYoutube: { type: String, required: true },
  strTags: { type: String, required: true },
  ingredients: [ingredientSchema],
});

const Recipes =
  mongoose.models.Recipes || mongoose.model("Recipes", recipeSchema);

export default Recipes;
