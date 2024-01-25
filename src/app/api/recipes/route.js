import dbConnect from "../../../../db/connect";
import Recipes from "../../../../db/models/recipes";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

await dbConnect();
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "You are not logged in." });
  }
  try {
    const recipes = await Recipes.find();
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
    await Recipes.create(recipeData);
    return new Response(JSON.stringify({ status: "Recipe added! =)" }), {
      status: 201,
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
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
