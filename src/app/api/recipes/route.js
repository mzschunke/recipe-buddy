import dbConnect from "../../../../db/connect";
import Recipes from "../../../../db/models/recipes";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

await dbConnect();
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "You are not logged in." });
  }
  try {
    const recipes = await Recipes.find({
      createdBy: new ObjectId(session.user.id),
    });
    if (!recipes || recipes.length === 0) {
      return new Response(
        JSON.stringify({ message: "No recipes found for this user" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(JSON.stringify(recipes), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "You are not logged in." });
  }
  try {
    const recipeData = await request.json();
    const existingRecipe = await Recipes.findOne({
      createdBy: new ObjectId(session.user.id),
      strMeal: recipeData.strMeal,
    });
    if (existingRecipe) {
      return new Response(
        JSON.stringify({ message: "Recipe already exists" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    await Recipes.create(recipeData);
    return new Response(JSON.stringify({ status: "Recipe added! =)" }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding recipe", error);
    {
      return new Response(JSON.stringify({ error: "Failed to add recipe." }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
