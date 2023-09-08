import dbConnect from "../../../../../db/connect";
import Recipes from "../../../../../db/models/Recipes";

await dbConnect();

export async function DELETE(req, { params }) {
  try {
    const id = params.id;
    console.log("Params.id (API):", id);
    if (!id) {
      return;
    }
    await Recipes.findByIdAndDelete(id);
    return new Response(
      JSON.stringify({ status: `Recipe ${id} successfully deleted.` }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
