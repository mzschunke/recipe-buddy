import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
  strMeal: { type: String, required: true, unique: false },
  strCategory: { type: String, required: true },
  strArea: { type: String, required: true },
  strMealThumb: { type: String, required: false },
  strInstructions: { type: String, required: true },
  ingredients: [
    {
      ingredient: { type: String, required: false },
      measure: { type: String, required: false },
    },
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Recipes =
  mongoose.models.Recipes || mongoose.model("Recipes", recipeSchema);

export default Recipes;
