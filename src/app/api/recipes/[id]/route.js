import dbConnect from "../../../../../db/connect";
import Recipes from "../../../../../db/models/Recipes";

await dbConnect();

export async function DELETE(req, { params }) {
  try {
    const id = params.id;
    console.log("Params.id", id);
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

export async function GET(req, { params }) {
  try {
    const id = params.id;
    console.log("Params.id GET", id);
    if (!id) {
      return;
    }

    const recipes = await Recipes.findById(id);
    return new Response(JSON.stringify(recipes), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return new Response(JSON.stringify({ error: "Recipe already exists" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function PUT(req, { params }) {
  try {
    const id = params.id;
    if (!id) {
      return;
    }
    // Using .text() method here to be able to convert ReadableStream object to JSON
    const requestBody = await req.text();
    const parsedBody = JSON.parse(requestBody);
    await Recipes.findByIdAndUpdate(id, { $set: parsedBody });
    return new Response(
      JSON.stringify({ status: `Recipe ${id} successfully edited.` }),
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
