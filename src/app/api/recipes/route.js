import dbConnect from "../../../../db/connect";
import Recipes from "../../../../db/models/Recipes";

export async function GET(req) {
  try {
    await dbConnect();

    const recipes = await Recipes.find();

    return new Response(JSON.stringify(recipes), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
