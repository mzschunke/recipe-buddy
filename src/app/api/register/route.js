import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/user";

await dbConnect();

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    console.log("User registered:", user.name, "ID:", user._id);
    return NextResponse.json(
      { message: "User registered:" + user.name, userID: user._id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to register user" },
      { status: 500 }
    );
  }
}
