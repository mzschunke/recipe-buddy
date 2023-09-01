import dbConnect from "../../../../db/connect";
import Recipes from "../../../../db/models/Recipes";

// export default async function handler(request, response) {
//   await dbConnect();

//   if (request.method === "GET") {
//     const recipes = await Recipes.find();
//     return response.status(200).json(recipes);
//   } else {
//     return response.status(405).json({ message: "Method not allowed" });
//   }
// }

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
