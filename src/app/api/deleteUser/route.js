import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/user";
import Recipes from "../../../../db/models/recipes";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

await dbConnect();

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const userId = new mongoose.Types.ObjectId(id);
    await Recipes.deleteMany({ createdBy: userId });
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    console.log("User deleted:", user.name, "ID:", user._id);
    return NextResponse.json(
      { user, message: "User deleted" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
