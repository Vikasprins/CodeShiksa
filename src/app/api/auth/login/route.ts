
// import connectDB from "@/app/utils/database";
// // import { register } from "../../../controllers/authController";
// import { NextResponse } from "next/server";

// export async function POST(req:any){
//     await connectDB();

//     try {
//         const {searchParams} = new URL(req.url);
//         if (searchParams.get("signup")) {
//             // return register(req);
//         }
//         return NextResponse.json({message:"testing api"})
//     } catch (error) {
        
//     }
// }

import { NextResponse } from "next/server";
import connectDB from "@/app/utils/database";
import User from "@/app/Models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "Invalid email " }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful", user: { email: user.email, password: user.password } });
  } catch (error: any) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
