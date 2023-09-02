import dbConnect from "../../../db/connect";
import Recipes from "../../../../db/models/Recipes";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const recipe = await Recipes.findById(id);

    if (!recipe) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(recipe);
  }
  if (request.method === "POST") {
    try {
      const recipeData = request.body;
      await Recipes.create(recipeData);
      response.status(201).json({ status: "Recipe added!" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "PUT") {
    Recipes.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).JSON({ status: `Recipe ${id} updated` });
  }
  if (request.method === "DELETE") {
    try {
      await Recipes.findByIdAndDelete(id);
      response
        .status(200)
        .json({ status: `Recipe ${id} successfully deleted.` });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
