import User from "@/app/(models)/user";
import connectDB from "@/app/(utils)/db";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    if ((!name || !email || !password)) {
      return NextResponse.json(
        { message: "Please Fill Out All the Fields" },
        { status: 500 }
      );
    }
    const response = await User.create({ name, email, password });
    return NextResponse.json({ response }, { status: 201 });
  } catch (error) {
    console.log("error from signup route");
  }
}
