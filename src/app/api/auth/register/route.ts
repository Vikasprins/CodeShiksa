import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import User from "@/app/Models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  try {
    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "User created successfully", user, success: true });
  } catch (error: unknown) {
    console.error("register error:", error);
    return NextResponse.json({ message: "Server error", error }, { status: 500 });
  }
}
