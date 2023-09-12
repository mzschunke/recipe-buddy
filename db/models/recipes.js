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
});

const Recipes =
  mongoose.models.Recipes || mongoose.model("Recipes", recipeSchema);

export default Recipes;
