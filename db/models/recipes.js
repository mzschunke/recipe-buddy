import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  strMeal: { type: String, required: true, unique: true },
  strCategory: { type: String, required: true },
  strArea: { type: String, required: true },
  strMealThumb: { type: String, required: false },
  strInstructions: { type: String, required: true },
});

const Recipes =
  mongoose.models.Recipes || mongoose.model("Recipes", recipeSchema);

export default Recipes;
