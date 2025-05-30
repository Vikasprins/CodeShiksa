import { NextResponse } from "next/server"
import User from "../Models/User"
import bcrypt from "bcryptjs"

//User register

// export const register = async (req: any) => {
//     const { email, password } = await req.json();

//     try {
//         let user = await User.findOne({ email });
//         if (user) {
//             return NextResponse.json({ message: "User already exist", success: false });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         user = await User.create({ email, password: hashedPassword })
//         return NextResponse.json({ message: "user create sucessful", user, success: true })

//     } catch (error) {
//         return NextResponse.json({ message: "server error", error })
//     }

// }

// User Login
export const login = async (req: Request) => {
    const { email, password } = await req.json()
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }
   return NextResponse.json({ message: "Login successful", user: { email: user.email } });
  } catch (error: unknown) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}


