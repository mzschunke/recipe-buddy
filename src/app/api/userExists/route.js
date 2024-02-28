import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/user";
import { NextResponse } from "next/server";

await dbConnect();

export async function POST(request) {
  try {
    const { email } = await request.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("User exists: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
